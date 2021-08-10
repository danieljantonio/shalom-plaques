import React from 'react';
import { NavLink } from 'react-router-dom';
import { groupByN } from '../../../helpers/helpers';
import ProductCard from '../../common/Product/product-card.common';
import './products.page.scss';

const ProductsPage: React.FC = () => {
	const products = [
		'Magnet',
		'Frame',
		'Box',
		'Cross',
		'Key Ring',
		'Wall Plaque',
		'Table Plaque',
		'Church Supplies',
		'Miscellaneous',
		'New Products',
	];

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
				{products.map((product) => (
					<ProductCard product={product} />
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
						{products.map((product, index) => (
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
