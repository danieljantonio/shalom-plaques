import { useRouter } from 'next/router';
import React from 'react';

const Hero = () => {
	const router = useRouter();
	return (
		<div className='lg:absolute z-10 h-fit lg:h-full lg:w-full bg-primary lg:bg-transparent lg:bg-gradient-to-b lg:from-toph lg:to-topb flex align-center justify-evenly'>
			<img className='h-3/5 m-auto hidden mdl:block' src="/images/product/hero-img-left.png" alt="Product Image" />
			<div className='w-fit h-full text-center text-white p-1/20 font-serif'>
				<div className=' text-3xl font-extralight'>Est. 1989</div>
				<div className='font-semibold text-5xl md:6xl xl:text-7xl pb-5'>
					Shalom
					<br />
					Plaques
				</div>
				<div className='text-3xl  pb-5'>Bringing the Word to the ends of the World</div>
				<button className='mt-2 p-4 text-2xl border rounded-lg bg-orange-500 hover:bg-orange-600' onClick={() => router.push('/products')}>
					View Products
				</button>
			</div>
			<img className='h-3/5 m-auto hidden mdl:block' src="/images/product/hero-img-right.png" alt="Product Image" />
		</div>
	);
};

export default Hero;
