import type { NextPage } from 'next';
import Card from '../components/card.components';
import Carousel from '../components/carousel.components';
import Hero from '../components/hero.components';

const Home: NextPage = ({ product }: any) => {
	return (
		<div>
			<div className="relative overflow-hidden h-fit bg-red-300">
				<Hero />
				<Carousel />
			</div>
			<Card product={product} />
		</div>
	);
};
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async (ctx) => {
	const res = await fetch('http://localhost:5000/product/62dea1f511d4f579211dfbbe');
	const { product } = await res.json();

	return {
		props: {
			product,
		},
	};
};
export default Home;
