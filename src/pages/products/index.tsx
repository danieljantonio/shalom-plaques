import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import ProductCatalogue from '../../components/product-catalogue.components';
import ProductHero from '../../components/producthero.components';

type Props = {
	categories: ICategory[];
	subCategories: ISubCategory[];
	products: IProduct[];
};

const Products: NextPage<Props> = ({ categories, subCategories, products }) => {
	return (
		<div className='w-10/12 mx-auto mt-8'>
			<ProductHero />
			<p className='text-2xl mx-auto w-full'>Product Catalogue</p>
			<ProductCatalogue categories={categories} subCategories={subCategories} products={products} />
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

export default Products;
