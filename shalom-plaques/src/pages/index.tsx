import type { NextPage } from 'next';
import Card from '../components/card.components';
import Carousel from '../components/carousel.components';
import Hero from '../components/hero.components';
import Sidebar from '../components/sidebar.components';

//local
import { GetStaticProps } from 'next';
const Home: NextPage = ({ categories }: any) => {
	return (
		<div>
			<div className='relative overflow-hidden h-fit bg-red-300'>
				<Hero />
				<Carousel />
			</div>
			<Sidebar categories={categories} />
		</div>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const categories = [
		{ _id: '62dea17e11d4f579211dfb89', name: 'Box', subCategories: ['62dea19711d4f579211dfb98', '62dea1af11d4f579211dfba4'], __v: 2 },
		{ _id: '62dea18f11d4f579211dfb8f', name: 'Carved', subCategories: ['62dea19e11d4f579211dfb9e', '62dea1b611d4f579211dfbaa'], __v: 2 },
	];

	return {
		props: {
			categories,
		},
	};
};
export default Home;
