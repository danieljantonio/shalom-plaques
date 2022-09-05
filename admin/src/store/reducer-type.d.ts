type RootState = ReturnType<typeof rootReducer>;

type CategoryType = {
	name: string;
};

type SubCategoryType = {
	name: string;
};

type ProductType = {
	_id: string;
	series: string;
	description: string;
	category: CategoryType;
	subCategory: SubCategoryType;
	images: string[];
};
