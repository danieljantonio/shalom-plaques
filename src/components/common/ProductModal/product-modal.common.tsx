import React, { useState } from 'react';
import './product-modal.common.scss';
import Modal from 'react-modal';

interface ModalProps {
	openModal: boolean;
	setOpenModal: (value: boolean) => void;
}

// Modal.setAppElement('#root');

const ReactModal: React.FC<ModalProps> = ({ openModal, setOpenModal }) => {
	// const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<button onClick={() => setOpenModal(true)}></button>
			<Modal isOpen={openModal} onRequestClose={() => setOpenModal(false)} contentLabel="Example Modal">
				Yay
			</Modal>
		</div>
	);
};

export default ReactModal;
