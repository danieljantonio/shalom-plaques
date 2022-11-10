import React, { useEffect, useState } from 'react';
import Card from './product-card.components';
import Sidebar from './sidebar.components';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import ProductModal from './modal.components';

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
	const [showModal, setShowModal] = useState<boolean>(false);
	const [selectedProduct, setSelectedProduct] = useState<any>();

	const renderProducts = () => {
		if (!categoryId && subCategoryIds.length <= 0) return products;
		if (subCategoryIds.length === 0) return [];
		if (subCategoryIds.length > 0) return products.filter((product) => subCategoryIds.includes(product.subCategory._id));
		return products.filter((products) => products.category._id === categoryId);
	};

	const onClickProduct = (product: IProduct) => {
		setSelectedProduct(product);
		setShowModal(true);
	};

	useEffect(() => {
		setProducts(renderProducts());
	}, [categoryId, subCategoryIds]);

	return (
		<div className='flex flex-col lg:flex-row w-full justify-between mdl:mt-14 mx-auto' style={{ minHeight: '70vh' }}>
			<div className='lg:max-w-sm w-full mx-auto'>
				<Sidebar categories={categories} setCategoryId={setCategoryId} subCategoryIds={subCategoryIds} setSubCategoryIds={setSubCategoryIds} />
			</div>
			<div className='mdl:w-4/5'>
				<div className='grid w-full xl:w-11/12 mx-auto 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1' ref={listRef}>
					{productsState.map((product, index) => (
						<Card product={product} key={index} onClick={() => onClickProduct(product)} />
					))}
				</div>
			</div>
			<ProductModal product={selectedProduct} closeModal={() => setShowModal(false)} showModal={showModal} />
		</div>
	);
};

export default ProductCatalogue;
