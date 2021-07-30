import React from 'react';
import './carousel.section.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselSection: React.FC = () => {
	const NextButton = (onClickHandler: any, hasNext: boolean, label: string) => {
		if (hasNext)
			return (
				<button type="button" onClick={onClickHandler} title={label} className="arrow-button right">
					<img src="http://localhost:3000/icons/arrow-right-white.svg" alt="next" />
				</button>
			);
	};

	const PrevButton = (onClickHandler: any, hasPrev: boolean, label: string) => {
		if (hasPrev)
			return (
				<button type="button" onClick={onClickHandler} title={label} className="arrow-button left">
					<img src="http://localhost:3000/icons/arrow-left-white.svg" alt="prev" />
				</button>
			);
	};

	const urls = [
		'http://localhost:3000/sample-images/woodwork-test-1.jpeg',
		'http://localhost:3000/sample-images/woodwork-test-2.jpeg',
		'http://localhost:3000/sample-images/woodwork-test-3.jpeg',
		'http://localhost:3000/sample-images/woodwork-test-4.jpeg',
		'http://localhost:3000/sample-images/woodwork-test-5.jpeg',
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
