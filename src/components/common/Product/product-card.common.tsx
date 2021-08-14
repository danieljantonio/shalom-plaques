import React, { useState } from 'react';
import { baseUrl, ItemCardDetail } from '../../../helpers/helpers';
import ReactModal from '../ProductModal/product-modal.common';
import './product-card.common.scss';

interface ProductCardProps {
	product: ItemCardDetail;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	const [modalState, setModalState] = useState(false);

	const closeModal = async () => {
		await setTimeout(() => {}, 500);
		await setModalState(false);
	};

	return (
		<div className="product-card card" onClick={() => setModalState(true)}>
			<div className="card-image">
				<img
					src={`${baseUrl}/product-images/${product?.category}/${product?.subCategory}/${product?.productCode}.jpg`}
					alt={product?.productCode}
				/>
			</div>
			<div className="content">
				<h3>{product?.productCode}</h3>
				<ReactModal modalState={modalState} setModalState={closeModal} />
			</div>
		</div>
	);
};

export default ProductCard;
