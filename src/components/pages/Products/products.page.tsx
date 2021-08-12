import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { capitalize, getFileStructure, groupByN } from '../../../helpers/helpers';
import ProductCard from '../../common/Product/product-card.common';
import './products.page.scss';

interface ProductsParams {
	categoryId: string | '';
}

const ProductsPage = () => {
	const productCategories = Object.keys(getFileStructure());
	const { categoryId } = useParams<ProductsParams>();
	const products = getFileStructure();
	// console.log(products[capitalize(categoryId.replace('-', ' '))]);
	const [category, setCategory] = useState(products[capitalize(categoryId.replace('-', ' '))]);
	// console.log(category);

	useEffect(() => {
		setCategory(products[capitalize(categoryId.replace('-', ' '))]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [categoryId]);

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
			<h1>Products</h1>
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
