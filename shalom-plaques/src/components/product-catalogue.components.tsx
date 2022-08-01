import React, { useEffect, useState } from 'react';
import Card from './card.components';
import Sidebar from './sidebar.components';

type Props = {
	categories: ICategory[];
	subCategories?: ISubCategory[];
	products: IProduct[];
};

// To query and render specific products, enter either the categoryId for category based filters
// and enter subCategoryId for subCategory based filters
const ProductCatalogue = ({ categories, subCategories, products }: Props) => {
	const [productsState, setProducts] = useState<IProduct[]>(products);
	const [categoryId, setCategoryId] = useState<string | null>(null);
	const [subCategoryId, setSubCategoryId] = useState<string | null>(null);

	const renderProducts = () => {
		if (!categoryId && !subCategoryId) return products;
		if (categoryId) return products.filter((products) => products.category._id === categoryId);
		return products.filter((products) => products.subCategory._id === subCategoryId);
	};

	useEffect(() => {
		setProducts(renderProducts());
	}, [categoryId, subCategoryId]);

	return (
		<>
			<div>
				<Sidebar categories={categories} setCategoryId={setCategoryId} setSubCategoryId={setSubCategoryId} />
			</div>
			<div className='w-full md:w-4/5 mx-auto'>
				<div className='grid 3xl:grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1'>
					{productsState.map((product) => (
						<Card product={product} />
					))}
				</div>
			</div>
		</>
	);
};

export default ProductCatalogue;
