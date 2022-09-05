import * as express from 'express';
import { validateSubCategory } from '../helpers/product.helpers';
import { returnResponse } from '../helpers/res.helpers';
import { removeFiles, storeFiles, upload } from '../helpers/upload.helper';
import Product from '../models/products/product.model';
import SubCategory from '../models/subcategory/subcategory.model';

type ProductQueryType = { category?: string; subCategory?: string };

class ProductController {
	public path = '/product';
	public router = express.Router();

	constructor() {
		this.initializeRoutes();
	}

	public initializeRoutes = () => {
		this.router.post(this.path, upload.array('file', 5), this.createProduct);
		this.router.get(this.path, this.getProducts);
		this.router.get(`${this.path}/:id`, this.getProduct);
		this.router.delete(`${this.path}/:id`, this.deleteProduct);
	};

	createProduct = async (req: express.Request, res: express.Response) => {
		try {
			// IMAGES: The images are stored through the middleware using multer
			// it is automatically stored in ./temp/uploads and is sent to the
			// function through req.files
			const imageFiles = req.files as Express.Multer.File[];

			const { series, description, subCategory: _subCategory, category }: { series: string; description: string; subCategory: string; category: string } = req.body;

			console.log(req.body);
			console.log(description);

			const subCategory = await validateSubCategory(category, _subCategory);
			if (!subCategory) throw Error(`Mismatch! Category not found or invalid SubCategory`);

			const newProduct = new Product({ series, description, category, subCategory: _subCategory });
			console.log(newProduct);

			await newProduct.save();

			// IMAGES: If pictures exist, this function will run. Might be better to move
			// this action to the storeFiles helper function
			if (imageFiles) {
				// Generate a list of imageUrls to be stored in the product.
				// Might be better to move this to helper along with moving the images
				let images: string[] = [];
				Object.values(imageFiles).forEach((imageFile: any, index: number) => {
					images.push(`uploads/${newProduct._id}/${index}.${imageFile.mimetype.split('/')[1]}`);
				});
				newProduct.images = images;
				// This function moves the temporarily uploaded files to the ./uploads/{productId} folder
				storeFiles(imageFiles, newProduct);
				await newProduct.save();
			}

			subCategory.products.push(newProduct._id);
			await subCategory.save();

			const products = await Product.find().lean().populate('category subCategory').exec();

			returnResponse(200, res, { newProduct, products });
		} catch (error) {
			returnResponse(500, res, { error: 'Failed to create product' /* , errorLog: error */ });
		}
	};

	getProducts = async (req: express.Request, res: express.Response) => {
		try {
			const query: ProductQueryType = {};
			const { category, subCategory }: ProductQueryType = req.query;
			if (category) query.category = category;
			if (subCategory) query.subCategory = subCategory;

			const products = await Product.find().lean().populate('category subCategory').exec();
			returnResponse(200, res, { products });
		} catch (error) {
			returnResponse(500, res, { error: 'Failed to fetch products' /* , errorLog: error */ });
		}
	};

	getProduct = async (req: express.Request, res: express.Response) => {
		const { id = null } = req.params;
		try {
			const product = await Product.findOne({ _id: id }).populate('category subCategory').lean().exec();
			if (!product) throw Error('Product not found');
			returnResponse(200, res, { product });
		} catch (error) {
			returnResponse(500, res, { error: `Failed to fetch product ${id}` /* , errorLog: error */ });
		}
	};

	deleteProduct = async (req: express.Request, res: express.Response) => {
		const { id = null } = req.params;
		try {
			const product = await Product.findOne({ _id: id }).exec();
			if (!product) throw Error('Product not found');

			const subCategory = await SubCategory.findOne({ _id: product.subCategory }).exec();
			if (!subCategory) throw Error('Product SubCategory not found');

			const isDeleted = await Product.deleteOne({ _id: id });

			// Remove product from subcategory
			subCategory.products = subCategory.products.filter((product) => product._id != id);
			await subCategory.save();

			if (isDeleted) removeFiles(product);

			const products = await Product.find().lean().populate('category subCategory').exec();

			returnResponse(200, res, { deleted: true, products });
		} catch (error) {
			returnResponse(500, res, { error: `Failed to fetch product ${id}` /* , errorLog: error */ });
		}
	};
}

export default ProductController;
