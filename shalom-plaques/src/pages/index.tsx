import type { NextPage } from 'next';
import Card from '../components/card.components';
import Carousel from '../components/carousel.components';
import Hero from '../components/hero.components';
import Sidebar from '../components/sidebar.components';
type Props = {
	categories: ICategory[];
	subCategories: ISubCategory[];
	products: IProduct[];
};

//local
import { GetStaticProps } from 'next';
import ProductCatalogue from '../components/product-catalogue.components';
const Home: NextPage<Props> = ({ categories, subCategories, products }) => {
	return (
		<div>
			<div className='relative overflow-hidden h-fit bg-red-300'>
				<Hero />
				<Carousel />
			</div>
			<div className='h-full flex'>
				<Sidebar categories={categories} />
				<ProductCatalogue categories={categories} subCategories={subCategories} products={products} />
			</div>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { categories } = await fetch('http://localhost:5000/category').then((data) => data.json());
	const { subCategories } = await fetch('http://localhost:5000/subcategory').then((data) => data.json());
	const { products } = await fetch('http://localhost:5000/product').then((data) => data.json());

	return {
		props: {
			categories: categories,
			subCategories: subCategories,
			products: products,
		},
	};
};
export default Home;
