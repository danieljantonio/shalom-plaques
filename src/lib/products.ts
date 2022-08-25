export const fetchData = async () => {
	try {
		const { categories } = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`).then((data) => data.json());
		const { subCategories } = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subcategory`).then((data) => data.json());
		const { products } = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`).then((data) => data.json());
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

export const getAllProductIds = async () => {
	try {
		const { products }: { products: IProduct[] } = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`).then((data) => data.json());

		const allProductIds = products.map((product) => {
			return {
				params: {
					id: product._id,
				},
			};
		});

		return allProductIds;
	} catch (error) {
		return [];
	}
};

export const getProductImageUrls = (product: IProduct) => {
	const productImages = product.images;
	if (productImages.length < 1) return [];
	return productImages.map((imgUrl) => `${process.env.NEXT_PUBLIC_API_URL}/${imgUrl}`);
};

export const getCollageImageUrls = (product: IProduct) => {
	const productImages = product.images;
	if (productImages.length < 1) return [];
	return productImages.map((imgUrl) => {
		return { source: `${process.env.NEXT_PUBLIC_API_URL}/${imgUrl}` };
	});
};
