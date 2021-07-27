import React from 'react';
import './product-card.common.scss';

const ProductCard: React.FC = () => {
	return (
		<div className="product-card card" onClick={() => alert('Click')}>
			<img className="card-image" src="http://localhost:3000/sample-images/woodwork-test-2.jpeg" alt="asdf" />
			<div className="content">
				<h3>Item 1</h3>
			</div>
		</div>
	);
};

export default ProductCard;
