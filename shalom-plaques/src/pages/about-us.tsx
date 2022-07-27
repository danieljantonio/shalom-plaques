import { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutUs: NextPage = () => {
	return (
		<div className='flex flex-col'>
			<div className='flex'>
				<div className='basis-1/3 grow'>
					<div className='fixed h-full w-1/2 left-0 top-0 -z-10'>
						<Image src='/images/about/wood4.jpg' layout='fill' objectFit='cover' />
					</div>
					<div className='w-1/2 m-auto rounded-full overflow-hidden mt-32'>
						<Image src='/images/about/about.JPG' layout='responsive' width={2000} height={2000} />
					</div>
				</div>
				<div className='flex flex-col basis-1/3 grow'>
					<div className='h-screen bg-red-100 p-40 font-serif'>
						<div className='text-9xl'>About Us</div>
						<div className='text-lg'>
							For over 30 years, Shalom Handicrafts have produced high quality products made from locally selected woods. Exporting Indonesian woodwork to over 23 countries all around the world and providing training and jobs to less
							fortunate individuals.
						</div>
					</div>
					<div className='h-screen bg-blue-100 p-40 font-serif'>
						<div className='text-9xl'>About Us</div>
						<div className='text-lg'>
							For over 30 years, Shalom Handicrafts have produced high quality products made from locally selected woods. Exporting Indonesian woodwork to over 23 countries all around the world and providing training and jobs to less
							fortunate individuals.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
