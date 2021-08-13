/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { capitalize, getFileStructure, getItems, groupByN } from '../../../helpers/helpers';
import ProductCard from '../../common/Product/product-card.common';
import './products.page.scss';

interface ProductsParams {
	categoryId: string | '';
}

const ProductsPage = () => {
	const productCategories = Object.keys(getFileStructure());
	const { categoryId } = useParams<ProductsParams>();
	const products = getFileStructure();

	const getCategory = (categoryId?: string) => {
		if (!categoryId) return 'Products';
		return capitalize(categoryId?.replace('-', ' '));
	};
	// console.log(products[capitalize(categoryId.replace('-', ' '))]);
	const [category, setCategory] = useState(getCategory(categoryId));
	// console.log(category);

	useEffect(() => {
		setCategory(getCategory(categoryId));
		getProducts(getCategory(categoryId));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [categoryId]);

	const getProducts = (category: string) => {
		const items = getItems(category);
		console.log(items);
	};

	const mockProductData = {
		wording: 'God is Love',
		code: 'AM-02',
		description: 'Hand carved rectangular shape fridge magnet',
		length: 6.5,
		width: 5.5,
		height: 0.5,
		verse: 'Colossians 3:12',
		price: 'RpXX,XXX',
		links: {
			tokopedia: 'https://www.tokopedia.com/',
			shopee: 'https://shopee.co.id/',
		},
	};

	const productItems = [
		mockProductData,
		mockProductData,
		mockProductData,
		mockProductData,
		mockProductData,
		mockProductData,
		mockProductData,
		mockProductData,
		mockProductData,
		mockProductData,
	];

	const renderRows = (products: []) => {
		return (
			<div className="row">
				{products.map((product, index) => (
					<ProductCard key={index} product={product} />
				))}
			</div>
		);
	};

	return (
		<div className="product-page">
			<h1>{getCategory(categoryId)}</h1>
			<div className="row container">
				<div className="sidenav">
					<div className="card">
						{productCategories.map((product, index) => (
							<NavLink key={index} exact to={`/products/${product.toLowerCase().replace(' ', '-')}`}>
								{product}
							</NavLink>
						))}
					</div>
				</div>
				<div className="main">{groupByN(3, productItems).map((productRow, index) => renderRows(productRow))}</div>
			</div>
		</div>
	);
};

export default ProductsPage;
