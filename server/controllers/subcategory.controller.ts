import * as express from 'express';
import { returnResponse } from '../helpers/res.helpers';
import { validateCategory } from '../helpers/product.helpers';
import SubCategory from '../models/subcategory/subcategory.model';
import Product from '../models/products/product.model';
import IProduct from '../models/products/product.interface';
import { handleProductDelete } from '../helpers/delete-handler.helpers';
import Category from '../models/category/category.model';

class SubCategoryController {
	public path = '/subcategory';
	public router = express.Router();

	constructor() {
		this.initializeRoutes();
	}

	public initializeRoutes = () => {
		this.router.get(`${this.path}/:id`, this.getSubCategory);
		this.router.get(this.path, this.getSubCategories);
		this.router.post(this.path, this.createSubCategory);
		this.router.delete(`${this.path}/:id`, this.deleteSubCategory);
	};

	createSubCategory = async (req: express.Request, res: express.Response) => {
		try {
			const { name, category: _category }: { name: string; category: string } = req.body;

			const category = await validateCategory(_category);
			if (!category) throw Error(`Category ${_category} not found`);

			const newSubCategory = new SubCategory({ name });
			await newSubCategory.save();

			category.subCategories.push(newSubCategory._id);
			await category.save();

			const subCategories = await SubCategory.find().lean().exec();

			returnResponse(200, res, { subCategory: newSubCategory.toJSON(), subCategories });
		} catch (error) {
			returnResponse(500, res, { error: 'Failed to create subcategory' /* , errorLog: error */ });
		}
	};

	getSubCategories = async (_: express.Request, res: express.Response) => {
		try {
			const categories = await Category.find().populate('subCategories subCategories.products').lean().exec();
			const subCategories: any = [];
			categories.map((category) => {
				category.subCategories.map((subCat) => {
					subCategories.push({ ...subCat, category: category.name });
				});
			});

			returnResponse(200, res, { subCategories });
		} catch (error) {
			returnResponse(500, res, { error: 'Failed to fetch categories' /* , errorLog: error */ });
		}
	};

	getSubCategory = async (req: express.Request, res: express.Response) => {
		const { id = null } = req.params;
		try {
			const subCategory = await SubCategory.findOne({ _id: id }).populate('products').lean().exec();
			if (!subCategory) throw Error('SubCategory not found');
			returnResponse(200, res, { subCategory });
		} catch (error) {
			console.error(error);
			returnResponse(500, res, { error: `Failed to fetch subcategory ${id}` /* , errorLog: error */ });
		}
	};

	deleteSubCategory = async (req: express.Request, res: express.Response) => {
		const { id = null } = req.params;
		try {
			const subCategory = await SubCategory.findOne({ _id: id }).lean().exec();
			if (!subCategory) throw Error('SubCategory not found');

			const containProducts = subCategory.products.length > 0 ? true : false;

			const isSubCatDeleted = await SubCategory.deleteOne({ _id: id });
			if (!isSubCatDeleted) throw Error('Failed to delete subCategory');

			const category = await Category.findOne({ subCategories: { $in: subCategory._id } }).exec();

			if (category) {
				category.subCategories = category.subCategories.filter((subCat) => subCat._id != id);
				await category.save();
			}

			if (containProducts) {
				const productsUnderSubCat = await Product.find({ subCategory: subCategory._id }).lean().exec();
				productsUnderSubCat.forEach((product: IProduct) => {
					handleProductDelete(product);
				});
			}
			const subCategories = await SubCategory.find().lean().exec();

			returnResponse(200, res, { isDeleted: true, subCategories });
		} catch (error) {
			console.error(error);
			returnResponse(500, res, { error: `Failed to delete subc0ategory ${id}` /* , errorLog: error */ });
		}
	};
}

export default SubCategoryController;
