import React from 'react';

const Card = ({ product }: { product: IProduct }) => {
	return (
		<div className='card m-4 mx-auto w-96 bg-base-100 shadow-lg'>
			<figure>
				<img src='https://placeimg.com/400/225/arch' className='h-56' alt='Shoes' />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{product.series}</h2>
				<p>{product.description}</p>
				<div className='card-actions justify-end'>
					<div className='badge badge-outline'>{product.category.name}</div>
					<div className='badge badge-outline'>{product.subCategory.name}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
