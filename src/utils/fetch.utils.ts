export const fetchData = async () => {
	try {
		const { categories } = await fetch(`${process.env.API_URL}/category`).then((data) => data.json());
		const { subCategories } = await fetch(`${process.env.API_URL}/subcategory`).then((data) => data.json());
		const { products } = await fetch(`${process.env.API_URL}/product`).then((data) => data.json());
		return {
			props: {
				categories: categories,
				subCategories: subCategories,
				products: products,
			},
		};
	} catch (error) {
		return {
			props: {
				categories: [],
				subCategories: [],
				products: [],
			},
		};
	}
};
