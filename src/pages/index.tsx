import type { NextPage } from 'next';
import Carousel from '../components/carousel.components';
import Hero from '../components/hero.components';
import Sidebar from '../components/sidebar.components';

//local
import { GetStaticProps } from 'next';
import ProductCatalogue from '../components/product-catalogue.components';

type Props = {
	categories: ICategory[];
	subCategories: ISubCategory[];
	products: IProduct[];
};

const Home: NextPage<Props> = ({ categories, subCategories, products }) => {
	return (
		<div>
			<div className='relative overflow-hidden h-fit bg-red-300'>
				<Hero />
				<Carousel />
			</div>
			<div className='h-full flex'>
				<ProductCatalogue categories={categories} subCategories={subCategories} products={products} />
			</div>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	try {
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
	} catch (error) {
		return {
			props: {
				categories: [],
				subCategories: [],
				products: [],
			},
		};
	}
};

export default Home;
