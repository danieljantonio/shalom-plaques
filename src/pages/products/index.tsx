import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import ProductCatalogue from '../../components/product-catalogue.components';
import ProductHero from '../../components/producthero.components';
import { fetchData } from '../../utils/fetch.utils';

type Props = {
	categories: ICategory[];
	subCategories: ISubCategory[];
	products: IProduct[];
};

const Products: NextPage<Props> = ({ categories, subCategories, products }) => {
	return (
		<div className='mx-auto max-w-full'>
			<ProductHero />
			<p className='text-2xl mx-auto w-full'>Product Catalogue</p>
			<ProductCatalogue categories={categories} subCategories={subCategories} products={products} />
		</div>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => fetchData();

export default Products;
