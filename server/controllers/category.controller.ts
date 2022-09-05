import * as express from 'express';
import { handleSubCatDelete } from '../helpers/delete-handler.helpers';
import { returnResponse } from '../helpers/res.helpers';
import Category from '../models/category/category.model';

class CategoryController {
	public path = '/category';
	public router = express.Router();

	constructor() {
		this.initializeRoutes();
	}

	public initializeRoutes = () => {
		this.router.get(`${this.path}/:id`, this.getCategory);
		this.router.get(this.path, this.getCategories);
		this.router.post(this.path, this.createCategory);
		this.router.delete(`${this.path}/:id`, this.deleteCategory);
	};

	createCategory = async (req: express.Request, res: express.Response) => {
		try {
			const { name }: { name: string } = req.body;
			const newCategory = new Category({ name });
			await newCategory.save();
			const categories = await Category.find().lean().exec();
			returnResponse(200, res, { newCategory, categories });
		} catch (error) {
			returnResponse(500, res, { error: 'Failed to create category' /* , errorLog: error */ });
		}
	};

	getCategories = async (_: express.Request, res: express.Response) => {
		try {
			const categories = await Category.find().populate('subCategories').lean().exec();
			returnResponse(200, res, { categories });
		} catch (error) {
			returnResponse(500, res, { error: 'Failed to fetch categories' /* , errorLog: error */ });
		}
	};

	getCategory = async (req: express.Request, res: express.Response) => {
		const { id = null } = req.params;
		try {
			const category = await Category.findOne({ _id: id }).populate('subCategories').lean().exec();
			if (!category) throw Error('Category not found');
			returnResponse(200, res, { category });
		} catch (error) {
			returnResponse(500, res, { error: `Failed to fetch category ${id}` /* , errorLog: error */ });
		}
	};

	deleteCategory = async (req: express.Request, res: express.Response) => {
		const { id = null } = req.params;
		try {
			const category = await Category.findOne({ _id: id }).exec();
			if (!category) throw Error('Category not found');

			const isCategoryDeleted = await Category.deleteOne({ _id: id });

			if (!isCategoryDeleted) throw Error('Failed to delete category');

			console.log('Deleting category');

			const categories = await Category.find().lean().exec();

			// Handle the deletion of subcategory and products
			category.subCategories.forEach((subCategory) => {
				handleSubCatDelete(subCategory);
			});

			returnResponse(200, res, { isDeleted: true, categories });
		} catch (error) {
			returnResponse(500, res, { error: `Failed to delete category ${id}` /* , errorLog: error */ });
		}
	};
}

export default CategoryController;
