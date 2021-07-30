import React, { useState } from 'react';
import './product-modal.common.scss';
import Modal from 'react-modal';
import ColumnHalf from '../Column/half.column';
import ModalCarousel from './components/modal-carousel.product-modal';

interface ModalProps {
	openModal: boolean;
	setOpenModal: (value: boolean) => void;
}

// Modal.setAppElement('#root');
const mockProductData = {
	wording: 'God is Love',
	code: 'AM-02',
	description: 'Hand carved rectangular shape fridge magnet',
	length: 6.5,
	width: 5.5,
	height: 0.5,
	verse: 'Colossians 3:12',
	price: 'RpXX,XXX',
};
const ReactModal: React.FC<ModalProps> = ({ openModal, setOpenModal }) => {
	// const [isOpen, setIsOpen] = useState(false);
	const productData = mockProductData;

	return (
		<div>
			<button onClick={() => setOpenModal(true)}></button>
			<Modal isOpen={openModal} onRequestClose={() => setOpenModal(false)} contentLabel="Example Modal">
				<ColumnHalf>
					<ModalCarousel />
				</ColumnHalf>
				<ColumnHalf>
					<h1>{productData.wording}</h1>
				</ColumnHalf>
			</Modal>
		</div>
	);
};

export default ReactModal;
