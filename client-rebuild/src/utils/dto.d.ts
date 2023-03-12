export type ICategory = {
  _id: string;
  name: string;
  subCategories: ISubCategory[];
};

export type ISubCategory = {
  _id: string;
  name: string;
  products: IProduct[];
  category: string;
};

export type IProduct = {
  _id: string;
  series: string;
  description: string;
  images: string[];
  category: CategoryType;
  subCategory: SubCategoryType;
};
