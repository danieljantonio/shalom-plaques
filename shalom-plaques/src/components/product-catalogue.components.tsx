import React from 'react';

type Props = {
	categories: ICategory[];
	subCategories: ISubCategory[];
	products: IProduct[];
};

const ProductCatalogue = ({ categories, subCategories, products }: Props) => {
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

export default ProductCatalogue;
