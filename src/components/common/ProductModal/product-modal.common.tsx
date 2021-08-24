import React from 'react';
import './product-modal.common.scss';
import Modal from 'react-modal';
import ColumnHalf from '../Column/half.column';
import ModalCarousel from './components/modal-carousel.product-modal';
import { getItemDetails } from '../../../helpers/helpers';

interface ModalProps {
	modalState: boolean;
	setModalState: any;
	productCode: string;
	imgUrls: string[];
}

const textRow = (title: string, value: string | number, className: string = '') => (
	<p className={className}>
		<b>{title}:</b> {value}
	</p>
);

const ReactModal: React.FC<ModalProps> = ({ modalState, setModalState, productCode, imgUrls }) => {
	Modal.setAppElement('#root');
	const { Description, Dimensions, Height, Length, ProductCode, Width, Wording } = getItemDetails(productCode) || {};

	return (
		<div>
			<Modal shouldCloseOnOverlayClick={true} shouldCloseOnEsc={true} isOpen={modalState} onRequestClose={setModalState}>
				<div className="row">
					<ColumnHalf style={{ marginRight: '10px' }}>
						<ModalCarousel imgUrls={imgUrls} />
					</ColumnHalf>
					<ColumnHalf style={{ marginLeft: '10px' }}>
						<div className="close-button" onClick={setModalState}>
							X
						</div>
						<div>
							<h1>
								<b>{ProductCode}</b>: {Wording}
							</h1>
							{Height && Width && Length ? (
								textRow('Dimensions', `${Length}cm x ${Width}cm x ${Height}cm`, 'top-0')
							) : Dimensions ? (
								textRow('Dimensions', `${Dimensions}cm`)
							) : (
								<></>
							)}
							<b>Description:</b>
							<p style={{ marginTop: 0 }}>{Description}</p>
						</div>
					</ColumnHalf>
				</div>
			</Modal>
		</div>
	);
};

export default ReactModal;
