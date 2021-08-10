import React, { useState } from 'react';
import ReactModal from '../ProductModal/product-modal.common';
import './product-card.common.scss';

const ProductCard: React.FC = () => {
	const [modalState, setModalState] = useState(false);

	const closeModal = async () => {
		await setTimeout(() => {}, 500);
		await setModalState(false);
	};

	return (
		<div className="product-card card" onClick={() => setModalState(true)}>
			<img className="card-image" src="http://localhost:3000/sample-images/woodwork-test-2.jpeg" alt="asdf" />
			<div className="content">
				<h3>Item 1</h3>
				<ReactModal modalState={modalState} setModalState={closeModal} />
			</div>
		</div>
	);
};

export default ProductCard;
