import React, { useState } from 'react';
import { baseUrl, getItemDetails, ItemCardDetail } from '../../../helpers/helpers';
import ReactModal from '../ProductModal/product-modal.common';
import './product-card.common.scss';

interface ProductCardProps {
	product: ItemCardDetail;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	const [modalState, setModalState] = useState(false);

	const productExists: boolean = getItemDetails(product.productCode) ? true : false;

	const openModal = () => {
		if (!productExists) return;
		setModalState(true);
	};

	const closeModal = async () => {
		await setTimeout(() => {}, 500);
		await setModalState(false);
	};

	return (
		<div className="product-card card" onClick={openModal}>
			<div className="card-image">
				<img
					src={`${baseUrl}/product-images/${product?.category}/${product?.subCategory}/${product?.productCode}.jpg`}
					alt={product?.productCode}
				/>
			</div>
			<div className="content">
				<h3>{product?.productCode}</h3>
				<h3>{product?.subCategory}</h3>
				<ReactModal
					modalState={modalState}
					setModalState={closeModal}
					productCode={product.productCode}
					imgUrls={[`${baseUrl}/product-images/${product?.category}/${product?.subCategory}/${product?.productCode}.jpg`]}
				/>
			</div>
			{!productExists ? <div className="card-dark">Out of Stock</div> : <></>}
		</div>
	);
};

export default ProductCard;
