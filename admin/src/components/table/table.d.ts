type Column = {
	title: string;
	dataIndex: string;
	key: string;
};

type Columns = Column[];

interface ProductData {
	series: string;
	description: string;
	category: string;
	subcategory: string;
	images: number;
	key: string;
}

interface CategoryData {
	category: string;
	subcategory: number;
	key: string;
}

interface SubCategoryData {
	title: string;
	products: number;
	category: string;
	key: string;
}
