import type { NextPage } from 'next';
import Carousel from '../components/carousel.components';
import Hero from '../components/hero.components';
import Sidebar from '../components/sidebar.components';

//local
import { GetStaticProps } from 'next';
import ProductCatalogue from '../components/product-catalogue.components';
import { fetchData } from '../lib/products';
import { getAllProductIds } from '../lib/products';

type Props = {
	categories: ICategory[];
	subCategories: ISubCategory[];
	products: IProduct[];
};

const Home: NextPage<Props> = ({ categories, subCategories, products }) => {
	return (
		<div>
			<div className='relative overflow-hidden h-fit bg-red-300 z-0'>
				<Hero />
				<Carousel />
			</div>
			<div className='h-full flex'>
				<ProductCatalogue categories={categories} subCategories={subCategories} products={products} />
			</div>
		</div>
	);
};
getAllProductIds();
export const getStaticProps: GetStaticProps = async (ctx) => fetchData();

export default Home;
