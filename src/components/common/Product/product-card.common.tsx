import React, { useState } from 'react';
import ReactModal from '../ProductModal/product-modal.common';
import './product-card.common.scss';

const ProductCard: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="product-card card" onClick={() => setIsOpen(true)}>
			<img className="card-image" src="http://localhost:3000/sample-images/woodwork-test-2.jpeg" alt="asdf" />
			<div className="content">
				<h3>Item 1</h3>
				<ReactModal openModal={isOpen} setOpenModal={setIsOpen} />
			</div>
		</div>
	);
};

export default ProductCard;
