export const filterProducts = (products: IProduct[], categoryId: string, subCategoryId: string) => {
	if (subCategoryId) return products.filter((product) => product.category._id === categoryId);
	if (categoryId) return products.filter((product) => product.subCategory._id === subCategoryId);
	return products;
};
