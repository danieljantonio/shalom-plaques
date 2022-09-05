import ICategory from '../category/category.interface';
import ISubCategory from '../subcategory/subcategory.interface';

// interface to represent a user
interface IProduct {
	_id: string;
	series: string;
	description: string;
	images: string[];
	category: ICategory;
	subCategory: ISubCategory;
}

export default IProduct;
