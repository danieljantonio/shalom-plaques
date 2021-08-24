import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { baseUrl } from '../../../../helpers/helpers';
import './modal-carousel.product-modal.scss';

const ModalCarousel: React.FC<{ imgUrls: string[] }> = ({ imgUrls: urls }) => {
	const [isZoom, setIsZoom] = useState<boolean>(false);

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
				<div className={`carousel-container${isZoom ? ' img-cover' : ''}`} key={index} onClick={() => setIsZoom(!isZoom)}>
					<img className={`bg-img${isZoom ? ' img-cover' : ''}`} src={src} alt="test" />
				</div>
			))}
		</Carousel>
	);
};

export default ModalCarousel;
