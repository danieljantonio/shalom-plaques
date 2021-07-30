import React from 'react';
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

const ReactModal: React.FC<ModalProps> = ({ openModal, setOpenModal }) => {
	// const [isOpen, setIsOpen] = useState(false);
	const { wording, price, description, code, length, width, height, verse } = mockProductData;

	return (
		<div>
			<button onClick={() => setOpenModal(true)}></button>
			<Modal
				shouldCloseOnOverlayClick={true}
				shouldCloseOnEsc={true}
				isOpen={openModal}
				onRequestClose={() => setOpenModal(false)}
				contentLabel="Example Modal">
				<ColumnHalf style={{ marginRight: '10px' }}>
					<ModalCarousel />
				</ColumnHalf>
				<ColumnHalf style={{ marginLeft: '10px' }}>
					<h1>
						{code}: {wording}
					</h1>
					{textRow('Price', price, 'top-0')}
					{textRow('Verse', verse, 'top-0')}
					{textRow('Dimensions', `${length}cm x ${width}cm x ${height}cm`, 'top-0')}
					<b>Description:</b>
					<p style={{ marginTop: 0 }}>{description}</p>
				</ColumnHalf>
			</Modal>
		</div>
	);
};

export default ReactModal;
