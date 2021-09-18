import React from 'react';
import './product-modal.common.scss';
import Modal from 'react-modal';
import ModalCarousel from './components/modal-carousel.product-modal';
import { fetchImageUrls, NewItemCardDetail } from '../../../helpers/helpers';

interface ModalProps {
	modalState: boolean;
	setModalState: any;
	product: NewItemCardDetail;
}

const ReactModal: React.FC<ModalProps> = ({ modalState, setModalState, product }) => {
	Modal.setAppElement('#root');
	const imgUrls = fetchImageUrls(product);

	return (
		<div>
			<Modal shouldCloseOnOverlayClick={true} shouldCloseOnEsc={true} isOpen={modalState} onRequestClose={setModalState}>
				<div className="row">
					<ModalCarousel imgUrls={imgUrls} />
				</div>
				<div className="close-button" onClick={setModalState}>
					X
				</div>
			</Modal>
		</div>
	);
};

export default ReactModal;
