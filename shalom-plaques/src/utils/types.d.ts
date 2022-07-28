interface IProduct {
	_id: string;
	series: string;
	description: string;
	images: string[];
	category: ICategory;
	subCategory: ISubCategory;
}

interface ISubCategory {
	_id: string;
	name: string;
	products: IProduct[];
}

interface ICategory {
	_id: string;
	name: string;
	subCategories: ISubCategory[];
}
