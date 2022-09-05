import ISubCategory from '../subcategory/subcategory.interface';

// interface to represent a user
interface ICategory {
	name: string;
	subCategories: ISubCategory[];
}

export default ICategory;
