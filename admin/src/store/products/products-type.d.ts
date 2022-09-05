interface IProduct {
	_id: string;
	series: string;
	description: string;
	images: string[];
	category: CategoryType;
	subCategory: SubCategoryType;
}

type ProductState = {
	product: ProductType;
	products: ProductType[];
};

type ProductAction = {
	type: string;
	product?: ProductType;
	products?: ProductType[];
};
