import React from 'react';
import { NavLink } from 'react-router-dom';
import ColumnThirds from '../../common/Column/third.column';
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
				<div className="main">
					<div className="row ">
						<ColumnThirds>
							<ProductCard />
						</ColumnThirds>
						<ColumnThirds>
							<ProductCard />
						</ColumnThirds>
						<ColumnThirds>
							<ProductCard />
						</ColumnThirds>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductsPage;
