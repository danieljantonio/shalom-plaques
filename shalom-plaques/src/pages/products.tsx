import { GetStaticProps, NextPage } from 'next';
import React from 'react';

type Props = {
	categories: ICategory[];
	subCategories: ISubCategory[];
	products: IProduct[];
};

const Products: NextPage<Props> = ({ categories, subCategories, products }) => {
	return (
		<>
			<div>
				<div>Categories</div>
				{categories.map((category) => (
					<div className='collapse border border-black mb-1'>
						<input type='checkbox' className='peer' />
						<div className='collapse-title bg-secondary text-primary'>{category.name}</div>
						<div className='collapse-content bg-secondary text-primary'>
							{category.subCategories.map((subCategory) => (
								<div className='p-2 hover:bg-primary'>
									<p>{subCategory.name}</p>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const { categories } = await fetch('http://localhost:5000/category').then((data) => data.json());
	const { subCategories } = await fetch('http://localhost:5000/subcategory').then((data) => data.json());
	const { products } = await fetch('http://localhost:5000/product').then((data) => data.json());

	return {
		props: {
			categories,
			subCategories,
			products,
		},
	};
};

export default Products;
