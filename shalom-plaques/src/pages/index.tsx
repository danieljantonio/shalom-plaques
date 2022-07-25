import type { NextPage } from 'next';
import Carousel from '../components/carousel.components';
import Hero from '../components/hero.components';
const Home: NextPage = () => {
	return (
		<div>
			<div className="relative overflow-hidden h-fit bg-red-300">
				<Hero />
				<Carousel />
			</div>
		</div>
	);
};

export default Home;
