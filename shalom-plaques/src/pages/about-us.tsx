import { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutUs: NextPage = () => {
	const { scrollY } = useScroll();
	const x = useTransform(scrollY, [0, 2000, 3000], [0, 0, 1000]);
	const x2 = useTransform(scrollY, [0, 2000, 3000], [-1000, -1000, 0]);
	const o = useTransform(scrollY, [0, 2000, 3000], [1, 1, 0]);
	const o2 = useTransform(scrollY, [0, 2000, 2800], [0, 0, 1]);
	return (
		<div className='relative p-auto min-h-full w-full text-primary mx-auto -z-30'>
			<div className='absolute w-full mx-auto -z-10 top-0'>
				<div className='h-96 w-full bg-secondary'></div>
				<Image src='/images/about/people-1.JPG' layout='responsive' width='3456' height='2304' />
				<Image src='/images/about/people-1.JPG' layout='responsive' width='3456' height='2304' />
				<Image src='/images/about/people-1.JPG' layout='responsive' width='3456' height='2304' />
				<Image src='/images/about/people-1.JPG' layout='responsive' width='3456' height='2304' />
				<Image src='/images/about/people-1.JPG' layout='responsive' width='3456' height='2304' />
				<Image src='/images/about/people-1.JPG' layout='responsive' width='3456' height='2304' />
			</div>
			<motion.div style={{ x: x, opacity: o }} className='fixed ml-1/2 -translate-x-1/2  max-w-7xl bg-secondary rounded-full'>
				<div className='m-auto p-32'>
					<div className='text-center text-7xl font-bold font-serif'>About Us</div>
					<div className='text-xl'>
						For over 30 years, Shalom Handicrafts have produced high quality products made from locally selected woods. Exporting Indonesian woodwork to over 23 countries all around the world and providing training and jobs to less
						fortunate individuals.
					</div>
				</div>
			</motion.div>
			<motion.div style={{ x: x2, opacity: o2 }} className='fixed mr-1/2 bottom-20 -translate-x-1/2  max-w-7xl bg-secondary rounded-full'>
				<div className='m-auto p-32'>
					<div className='text-center text-7xl font-bold font-serif'>About Us</div>
					<div className='text-xl'>
						For over 30 years, Shalom Handicrafts have produced high quality products made from locally selected woods. Exporting Indonesian woodwork to over 23 countries all around the world and providing training and jobs to less
						fortunate individuals.
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default AboutUs;
