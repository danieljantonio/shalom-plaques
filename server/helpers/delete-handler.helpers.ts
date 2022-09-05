import IProduct from '../models/products/product.interface';
import Product from '../models/products/product.model';
import ISubCategory from '../models/subcategory/subcategory.interface';
import SubCategory from '../models/subcategory/subcategory.model';
import { removeFiles } from './upload.helper';

export const handleProductDelete = async (productId: IProduct) => {
	try {
		const product = await Product.findOne({ _id: productId }).exec();
		if (!product) throw Error('Product not found');

		const isDeleted = await Product.deleteOne({ _id: productId });

		if (!isDeleted) throw Error('Failed to delete product');
		removeFiles(product);
	} catch (error) {}
};

export const handleSubCatDelete = async (subCategoryId: ISubCategory) => {
	try {
		const subCategory = await SubCategory.findOne({ _id: subCategoryId });
		if (!subCategory) throw Error('SubCategory not found');

		const productsInSubCategory = subCategory.products;

		const isDeleted = await SubCategory.deleteOne({ _id: subCategoryId });

		if (!isDeleted) throw Error('Failed to delete subcategory');

		productsInSubCategory.forEach((product) => {
			handleProductDelete(product);
		});
	} catch (error) {}
};
