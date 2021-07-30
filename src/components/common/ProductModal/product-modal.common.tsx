import React from 'react';
import './product-modal.common.scss';
import Modal from 'react-modal';
import ColumnHalf from '../Column/half.column';
import ModalCarousel from './components/modal-carousel.product-modal';

interface ModalProps {
	modalState: boolean;
	setModalState: any;
}

const mockProductData = {
	wording: 'God is Love',
	code: 'AM-02',
	description: 'Hand carved rectangular shape fridge magnet',
	length: 6.5,
	width: 5.5,
	height: 0.5,
	verse: 'Colossians 3:12',
	price: 'RpXX,XXX',
	links: {
		tokopedia: 'https://www.tokopedia.com/',
		shopee: 'https://shopee.co.id/',
	},
};

const textRow = (title: string, value: string | number, className: string = '') => (
	<p className={className}>
		<b>{title}:</b> {value}
	</p>
);

const ReactModal: React.FC<ModalProps> = ({ modalState, setModalState }) => {
	Modal.setAppElement('#root');
	const { wording, price, description, code, length, width, height, verse } = mockProductData;

	return (
		<div>
			<Modal shouldCloseOnOverlayClick={true} shouldCloseOnEsc={true} isOpen={modalState} onRequestClose={setModalState}>
				<ColumnHalf style={{ marginRight: '10px' }}>
					<ModalCarousel />
				</ColumnHalf>
				<ColumnHalf style={{ marginLeft: '10px' }}>
					<div className="close-button" onClick={setModalState}>
						X
					</div>
					<div>
						<h1>
							{code}: {wording}
						</h1>
						{textRow('Price', price, 'top-0')}
						{textRow('Verse', verse, 'top-0')}
						{textRow('Dimensions', `${length}cm x ${width}cm x ${height}cm`, 'top-0')}
						<b>Description:</b>
						<p style={{ marginTop: 0 }}>{description}</p>
					</div>
				</ColumnHalf>
			</Modal>
		</div>
	);
};

export default ReactModal;
