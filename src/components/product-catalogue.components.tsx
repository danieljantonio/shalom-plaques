import React, { useEffect, useState } from 'react';
import Card from './product-card.components';
import Sidebar from './sidebar.components';
import { useAutoAnimate } from '@formkit/auto-animate/react';

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
	const [subCategoryIds, setSubCategoryIds] = useState<string[]>([]);
	const [listRef] = useAutoAnimate<HTMLDivElement>({ duration: 250, easing: 'ease-in-out' });

	const renderProducts = () => {
		if (!categoryId && subCategoryIds.length <= 0) return products;
		if (subCategoryIds.length > 0) return products.filter((product) => subCategoryIds.includes(product.subCategory._id));
		return products.filter((products) => products.category._id === categoryId);
	};

	useEffect(() => {
		setProducts(renderProducts());
	}, [categoryId, subCategoryIds]);

	return (
		<div className='flex flex-col mdl:flex-row w-full justify-between mdl:mt-14 2xl:px-24'>
			<div className='w-full mdl:w-100 mx-auto'>
				<Sidebar categories={categories} setCategoryId={setCategoryId} subCategoryIds={subCategoryIds} setSubCategoryIds={setSubCategoryIds} />
			</div>
			<div className='mdl:w-4/5'>
				<div className='grid max-w-screen-2xl mx-auto xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
					{productsState.map((product, index) => (
						<Card product={product} key={index} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductCatalogue;
