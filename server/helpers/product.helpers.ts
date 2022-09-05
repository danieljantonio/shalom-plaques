import ICategory from '../models/category/category.interface';
import Category from '../models/category/category.model';
import SubCategory from '../models/subcategory/subcategory.model';

export const validateCategory = async (categoryId: string) => {
	try {
		const category = await Category.findOne({ _id: categoryId }).exec();
		if (!category) return false;
		return category;
	} catch (error) {
		return false;
	}
};

export const validateSubCategory = async (categoryId: string, subCategoryId: string) => {
	try {
		const categoryExists: any = await validateCategory(categoryId);
		if (!categoryExists) return false;
		const validSubCategory: boolean = categoryExists.subCategories.some((id: any) => {
			return id == subCategoryId;
		});

		if (!validSubCategory) return false;

		const subCategory = await SubCategory.findOne({ _id: subCategoryId }).exec();
		if (!subCategory) return false;

		return subCategory;
	} catch (error) {
		return false;
	}
};

validateSubCategory('61a39e8688d1beba8894013c', '6220ebcefe8fda3a8fba1643');
