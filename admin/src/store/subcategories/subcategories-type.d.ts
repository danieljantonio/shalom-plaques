interface ISubCategory {
	_id: string;
	name: string;
	products: IProduct[];
}

type SubCategoryState = {
	subCategory: ISubCategory;
	subCategories: ISubCategory[];
};

type SubCategoryAction = {
	type: string;
	subCategory?: ISubCategory;
	subCategories?: ISubCategory[];
};
