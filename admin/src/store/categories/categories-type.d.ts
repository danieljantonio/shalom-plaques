interface ICategory {
	_id: string;
	name: string;
	subCategories: ISubCategory[];
}

type CategoryState = {
	categories: ICategory[];
	category: ICategory;
};

type CategoryAction = {
	type: string;
	categories?: ICategory[];
	category?: ICategory;
};
