import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
const Preview = () => {
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [500, 2000], [0, -1500]);
	return (
		<div className='w-full'>
			<motion.div style={{ y: y }} slot='container-start' className='absolute top-0 right-0 w-1/2 h-auto' data-swiper-parallax='-23% '>
				<Image src='/images/preview/wood2.jpg' layout='responsive' objectFit='contain' width={4000} height={6000} />
			</motion.div>
		</div>
	);
};

export default Preview;
