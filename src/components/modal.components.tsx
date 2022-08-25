import React, { useState } from 'react';
import Modal from 'react-modal';

type Props = {
	product: IProduct;
	showModal: boolean;
	closeModal: () => void;
};

const modalStyle: Modal.Styles = {
	content: {
		zIndex: 1,
		position: 'absolute',
		height: '85vh',
		width: '85vw',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: 'white',
	},
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
	},
};

const ProductModal: React.FC<Props> = ({ product, showModal, closeModal }) => {
	if (!product) return <></>;
	return (
		<>
			<Modal isOpen={showModal} shouldCloseOnOverlayClick={true} onRequestClose={closeModal} style={modalStyle}>
				<div className='flex flex-column justify-between h-full'>
					<div className='w-1/2 border-r-4'>left</div>
					<div className='w-1/2'>
						<h1>{product.series}</h1>
						<p>
							{product.category.name} - {product.category.name}
						</p>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default ProductModal;
