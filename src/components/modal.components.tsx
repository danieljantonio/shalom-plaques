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
		width: '90vw',
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
		height: ['450px', '200px'],
		layout: [1, 2],
		showNumOfRemainingPhotos: true,
		photos: photos,
		style: { padding: '4px', backgroundSize: 'contain' },
	};
	const collageSettingSmall = {
		width: '650px',
		height: ['350px', '125px'],
		layout: [1, 2],
		showNumOfRemainingPhotos: true,
		photos: photos,
		style: { padding: '4px', backgroundSize: 'contain' },
	};

	return (
		<>
			<Modal isOpen={showModal} shouldCloseOnOverlayClick={true} onRequestClose={closeModal} style={modalStyle}>
				<div id='modal-content' className='flex flex-col lg:flex-row justify-between h-full'>
					<div className='h-full w-1/2 items-center lg:pr-5 justify-center hidden lg:flex'>{photos.length > 0 ? <ReactPhotoCollage {...collageSetting} /> : <>No Image Found</>}</div>
					<div className='w-full h-4/6 flex items-center lg:pr-5 justify-center lg:hidden'>{photos.length > 0 ? <ReactPhotoCollage {...collageSettingSmall} /> : <>No Image Found</>}</div>
					<div className='w-full h-2/6 lg:h-full lg:w-1/2 pl-5 border-none lg:border-l-2'>
						<h1 className='text-6xl font-bold mb-4'>{product.series}</h1>
						<div className='pl-2'>
							<div className='absolute bottom-6 right-6 flex space-x-4'>
								<div className='border border-orange-600 rounded-full px-4 py-1'>{product.category.name}</div>
								<div className='border border-orange-600 rounded-full px-4 py-1'>{product.subCategory.name}</div>
							</div>
							<div className='italic text-gray-500'>{product.description ? product.description : 'No description added.'}</div>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default ProductModal;
