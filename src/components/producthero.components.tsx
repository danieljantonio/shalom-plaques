import Image from 'next/image';
import React from 'react';

const ProductHero = () => {
	return (
		<div className='flex flex-col-reverse h-3/5h mdl:h-1/2 mdl:flex-row justify-between bg-gradient-to-r from-yellow-800 to-orange-200'>
			<div className='basis2/3 m-auto font-serif text-white'>
				<div className='w-fit h-full text-center p-1/10 font-serif '>
					<div className='font-semibold text-6xl text-center sm:text-8xl pb-5 underline'>
						Product
						<br />
						Catalogue
					</div>
					<div className='text-3xl pb-5'>High Quality Woodwork From Indonesia</div>
				</div>
			</div>
			<div className='basis-1/3 h-full w-full m-auto'>
				<Image src='/images/product/product-banner-1.png' layout='responsive' width={1620} height={1080}></Image>
			</div>
		</div>
	);
};

export default ProductHero;
