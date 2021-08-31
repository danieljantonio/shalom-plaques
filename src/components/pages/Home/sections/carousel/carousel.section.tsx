import React from 'react';
import './carousel.section.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { baseUrl } from '../../../../../helpers/helpers';

const CarouselSection: React.FC = () => {
	const NextButton = (onClickHandler: any, hasNext: boolean, label: string) => {
		if (hasNext)
			return (
				<button type="button" onClick={onClickHandler} title={label} className="arrow-button right">
					<img src={`${baseUrl}/icons/arrow-right-white.svg`} alt="next" />
				</button>
			);
	};

	const PrevButton = (onClickHandler: any, hasPrev: boolean, label: string) => {
		if (hasPrev)
			return (
				<button type="button" onClick={onClickHandler} title={label} className="arrow-button left">
					<img src={`${baseUrl}/icons/arrow-left-white.svg`} alt="prev" />
				</button>
			);
	};

	const urls = [
		`${baseUrl}/production/machine-1.JPG`,
		`${baseUrl}/production/machine-2.JPG`,
		`${baseUrl}/production/working-1.JPG`,
		`${baseUrl}/production/working-2.JPG`,
		`${baseUrl}/production/working-3.JPG`,
		`${baseUrl}/production/working-4.JPG`,
		`${baseUrl}/production/working-5.JPG`,
		`${baseUrl}/production/working-6.JPG`,
		`${baseUrl}/production/working-7.JPG`,
	];

	return (
		<Carousel
			className="carousel-section"
			renderArrowNext={NextButton}
			renderArrowPrev={PrevButton}
			autoPlay={true}
			emulateTouch={true}
			showThumbs={false}
			infiniteLoop={true}
			showStatus={false}>
			{urls.map((src, index) => (
				<div className="carousel-container" key={index}>
					<img className="bg-img" src={src} alt="test" />
				</div>
			))}
		</Carousel>
	);
};

export default CarouselSection;
