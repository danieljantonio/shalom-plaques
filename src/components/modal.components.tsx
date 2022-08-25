import React, { useState } from 'react';
import Modal from 'react-modal';
import { ReactPhotoCollage } from 'react-photo-collage';
import { getCollageImageUrls } from '../lib/products';

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

	const photos = getCollageImageUrls(product);

	const collageSetting = {
		width: '650px',
		height: ['500px', '225px'],
		layout: [1, 2],
		showNumOfRemainingPhotos: true,
		photos: photos,
		style: { padding: '4px', backgroundSize: 'contain' },
	};

	return (
		<>
			<Modal isOpen={showModal} shouldCloseOnOverlayClick={true} onRequestClose={closeModal} style={modalStyle}>
				<div className='flex lg:flex-column justify-between h-full'>
					<div className='w-1/2 flex items-center pr-5 justify-center'>{photos.length > 0 ? <ReactPhotoCollage {...collageSetting} /> : <>No Image Found</>}</div>
					<div className='w-1/2 pl-5 border-l-2'>
						<h1 className=''>{product.series}</h1>
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
