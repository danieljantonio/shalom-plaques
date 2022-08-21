import Image from 'next/image';
import React from 'react';

const ProductHero = () => {
	return (
		<div className='flex flex-col-reverse h-3/5h mdl:h-1/2 mdl:flex-row justify-between'>
			<div className='basis2/3 m-auto font-serif'>
				<div className='text-6xl text-center sm:text-8xl font-bold underline underline-offset-4'>Product Catalogue</div>
				<div className='font-mono text-center text-xl'>High Quality Woodwork From Indonesia</div>
			</div>
			<div className='basis-1/3 h-full w-full m-auto'>
				<Image src='/images/product/product-banner-1.png' layout='responsive' width={1620} height={1080}></Image>
			</div>
		</div>
	);
};

export default ProductHero;
