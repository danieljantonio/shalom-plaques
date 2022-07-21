import React from 'react';
import './home.page.scss';
import CarouselSection from './sections/carousel/carousel.section';
import FeaturesSection from './sections/features/features.section';
import ShowcaseSection from './sections/showcase/showcase.section';
import TagLineSection from './sections/tagline/tagline.section';

const HomePage: React.FC = () => {
	return (
		<div>
			<TagLineSection />
			<CarouselSection />
			<FeaturesSection />
			<ShowcaseSection />
		</div>
	);
};

export default HomePage;
