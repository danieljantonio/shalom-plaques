import React, { useState } from 'react';
import { baseUrl, fetchThumbnail, getItemDetails, NewItemCardDetail } from '../../../helpers/helpers';
import ReactModal from '../ProductModal/product-modal.common';
import './product-card.common.scss';

interface ProductCardProps {
	product: NewItemCardDetail
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	const [modalState, setModalState] = useState(false);

	const productExists: boolean = getItemDetails(product?.series) ? true : false;

	const openModal = () => {
		// if (!productExists) return;
		setModalState(true);
	};

	const closeModal = async () => {
		await setTimeout(() => {}, 500);
		await setModalState(false);
	};

	return (
		<div className="product-card card" onClick={openModal}>
				<img
					src={fetchThumbnail(product)}
					alt={product?.series}
				/>
		</div>
	);
};

export default ProductCard;
