import React from 'react';

const Card = ({ product }: { product: IProduct }) => {
	return (
		<div className='card m-4 mx-auto w-4/5 md:w-80 bg-base-100 shadow-lg hover:cursor-pointer hover:shadow-2xl hover:scale-105 transition-all'>
			<figure>
				<img src='https://placeimg.com/400/225/arch' className='object-cover w-full h-56' alt='Shoes' />
			</figure>
			<div className='text-white card-body p-4 bg-gradient-to-t from-black absolute -right-0 w-full bottom-0'>
				<h2 className='card-title'>{product.series}</h2>
				<p>{product.description}</p>
				<div className='card-actions justify-end'>
					<div className='badge badge-outline'>{product.subCategory.name}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
