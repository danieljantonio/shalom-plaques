import { NextPage } from 'next';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const AboutUs: NextPage = () => {
	const [isFixed, setIsFixed] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const onscroll = () => {
			if (ref.current?.scrollHeight) {
				if (window.scrollY > ref.current?.scrollHeight) {
					setIsFixed(true);
				} else {
					setIsFixed(false);
				}
			}
		};
		window.addEventListener('scroll', onscroll);
	}, []);
	return (
		<div className='flex flex-col'>
			<div className='flex overflow-hidden'>
				<div className='fixed left-1/2 top-0 h-2/3 w-1/2 p-40 font-serif backdrop-invert -z-10'></div>
				<div className='basis-1/2 grow-0'>
					<div className='fixed h-full w-1/2 left-0 top-0 -z-10'>
						<Image src='/images/about/wood4darken.jpg' layout='fill' objectFit='cover' />
					</div>
					<div className='h-screen'>
						<div className=' max-w-md m-auto rounded-full overflow-hidden mt-32'>
							<Image src='/images/about/about.JPG' layout='responsive' width={2000} height={2000} />
						</div>
					</div>
					<div className='pb-96'>
						<div className=' max-w-2xl m-auto rounded-xl overflow-hidden mt-32'>
							<Image src='/images/about/people-1.JPG' layout='responsive' width={3456} height={2304} />
						</div>
					</div>
					<div className='h-screen'>
						<div className=' max-w-2xl m-auto rounded-xl overflow-hidden mt-32'>
							<Image src='/images/about/people-2.JPG' layout='responsive' width={3456} height={2304} />
						</div>
					</div>
				</div>
				<div className='flex flex-col basis-1/2 grow-0 -z-20'>
					<div className='h-screen p-40 font-serif'>
						<div className='text-9xl'>About Us</div>
						<div className='text-lg'>
							For over 30 years, Shalom Handicrafts have produced high quality products made from locally selected woods. Exporting Indonesian woodwork to over 23 countries all around the world and providing training and jobs to less
							fortunate individuals.
						</div>
					</div>
					<div ref={ref} className={isFixed ? 'fixed w-1/2  h-screen bg-black text-white font-serif' : 'h-screen bg-black text-white font-serif'}>
						<div className='p-40'>
							<div className='text-9xl'>Workers</div>
							<div className='text-lg'>Enabling people of lower-class to provide for their families through permanent employment. Many of which have been with us for over 25 years.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
