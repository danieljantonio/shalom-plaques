import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { baseUrl } from '../../../../helpers/helpers';
import './modal-carousel.product-modal.scss';

const ModalCarousel: React.FC = () => {
	const urls = [
		`${baseUrl}/sample-images/woodwork-test-1.jpeg`,
		`${baseUrl}/sample-images/woodwork-test-2.jpeg`,
		`${baseUrl}/sample-images/woodwork-test-3.jpeg`,
		`${baseUrl}/sample-images/woodwork-test-4.jpeg`,
		`${baseUrl}/sample-images/woodwork-test-5.jpeg`,
	];

	return (
		<Carousel
			className="modal-carousel"
			autoPlay={true}
			emulateTouch={true}
			showThumbs={false}
			infiniteLoop={true}
			showArrows={false}
			showStatus={false}>
			{urls.map((src, index) => (
				<div className="carousel-container" key={index}>
					<img className="bg-img" src={src} alt="test" />
				</div>
			))}
		</Carousel>
	);
};

export default ModalCarousel;
