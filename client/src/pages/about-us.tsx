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
			<div className='flex flex-col sm:flex-row overflow-hidden'>
				<motion.div initial={{ y: '-150%' }} animate={{ y: '0%' }} className='fixed left-1/2 bottom-0 w-1/2 h-1/5 font-serif backdrop-invert -z-10'></motion.div>
				<div className='flex flex-col basis-1/2 grow-0 px-5'>
					<div className='fixed h-full w-full sm:w-1/2 left-0 top-0 -z-10'>
						<Image src='/images/about/wood4dsr.jpg' layout='fill' objectFit='cover' />
					</div>
					<div className='h-screen'>
						<div className='w-full mdl:w-96 mt-10 mdl:mt-10 mdl:mr-10  rounded-full overflow-hidden mx-auto float-right'>
							<Image src='/images/about/aboutscale.JPG' layout='responsive' width={2000} height={2000} />
						</div>
						<div className='bg-quote text-3xl mdl:text-5xl text-white font-uchen font p-10 rounded-3xl mdl:w-3/4 mx-auto mt-40'>
							<q className=' tracking-wide leading-normal'>
								A SHOUT OF <span className='text-yellow-500'> PRAISE AND GRATITUDE</span> IS THE BEST WAY TO HANDLE <span className=' text-red-500'> THE IMPOSSIBLE</span>
							</q>
						</div>
					</div>
					<div className=''>
						<div className=' max-w-xl m-auto rounded-xl overflow-hidden mt-10 sm:mt-32'>
							<Image src='/images/about/people-1.JPG' layout='responsive' width={864} height={576} />
						</div>
					</div>
					<div className=''>
						<div className=' max-w-xl mr-auto rounded-xl overflow-hidden mt-10 sm:mt-32'>
							<Image src='/images/about/people-2.JPG' layout='responsive' width={864} height={576} />
						</div>
					</div>
					<div className=''>
						<div className=' max-w-xl ml-auto rounded-xl overflow-hidden mt-10 sm:mt-32'>
							<Image src='/images/about/people-3.JPG' layout='responsive' width={864} height={576} />
						</div>
					</div>
					<div className=''>
						<div className=' max-w-xl m-auto rounded-xl overflow-hidden mt-10 sm:mt-32'>
							<Image src='/images/about/people-4.JPG' layout='responsive' width={576} height={864} />
						</div>
					</div>
					<div className=''>
						<div className=' max-w-xl mr-auto rounded-xl overflow-hidden mt-10 sm:mt-32'>
							<Image src='/images/about/people-5.JPG' layout='responsive' width={864} height={576} />
						</div>
					</div>
					<div className=''>
						<div className=' max-w-xl m-auto rounded-xl overflow-hidden mt-10 sm:mt-32'>
							<Image src='/images/about/people-6.JPG' layout='responsive' width={864} height={576} />
						</div>
					</div>
					<div className='pb-32'>
						<div className=' max-w-xl ml-auto rounded-xl overflow-hidden mt-10 sm:mt-32 mb-52'>
							<Image src='/images/about/people-7.JPG' layout='responsive' width={864} height={576} />
						</div>
					</div>
				</div>
				<div className='fixed top-2/3 bg-white sm:static flex flex-col sm:w-1/2 basis-1/2 grow-0 sm:-z-20 text-black '>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						style={{
							opacity: isFixed ? 0 : 1,
							transition: 'all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
						}}
						className='h-screen align-middle p-5 font-serif  sm:p-20 xl:p-40'>
						<div className='text-5xl sm:text-7xl xl:text-8xl  align-middle mb-5'>About Us</div>
						<div className='text-lg sm:text-xl font-extralight leading-normal'>
							For over 30 years, Shalom Handicrafts have produced high quality products made from locally selected woods. Exporting Indonesian woodwork to over 23 countries all around the world and providing training and jobs to less
							fortunate individuals.
						</div>
					</motion.div>
					<div ref={ref} className={isFixed ? 'fixed sm:w-1/2  h-screen bg-black text-white font-serif' : ' sm:relative h-screen bg-black text-white font-serif'}>
						<motion.div
							style={{
								opacity: isFixed ? '1' : '0',
								transition: 'all 0.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
							}}
							className='p-5 sm:p-20 xl:p-40'>
							<div className='xl:text-8xl md:text-7xl text-5xl mb-5'>Workers</div>
							<div className='text-xl font-extralight'>Enabling people of lower-class to provide for their families through permanent employment. Many of which have been with us for over 25 years.</div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
