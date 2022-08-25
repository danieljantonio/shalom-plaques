import Image from 'next/image';
import React from 'react';
import { getProductImageUrls } from '../lib/products';
/* 
	<Link href={`/products/${product._id}`}>
	</Link>
*/

type Props = {
	product: IProduct;
	onClick: () => void;
};

const Card: React.FC<Props> = ({ product, onClick }) => {
	const imageUrl = product.images.length > 0 ? getProductImageUrls(product)[0] : 'https://placeimg.com/400/225/arch';

	return (
		<div className='card m-4 mx-auto w-4/5 md:w-80 bg-base-100 shadow-lg hover:cursor-pointer hover:shadow-2xl hover:scale-105 transition-all h-60' onClick={onClick}>
			<Image src={`${imageUrl}`} className='object-cover md:w-full h-56' alt={product.series} layout='fill'></Image>
			<div className='text-white card-body p-4 bg-gradient-to-t from-black absolute -right-0 w-full bottom-0'>
				<h2 className='card-title'>{product.series}</h2>
				{/* <p>{product.description}</p> */}
				<div className='card-actions justify-end'>
					<div className='badge badge-outline'>{product.subCategory.name}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
