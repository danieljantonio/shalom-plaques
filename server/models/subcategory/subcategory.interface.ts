import IProduct from '../products/product.interface';

// interface to represent a user
interface ISubCategory {
	_id: string;
	name: string;
	products: IProduct[];
}

export default ISubCategory;
