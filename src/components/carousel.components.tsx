import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Carousel = () => {
	return (
		<div className="w-full -z-10">
			<Swiper
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				effect={'fade'}
				grabCursor={true}
				centeredSlides={true}
				rewind={true}
				modules={[Autoplay]}
				slidesPerView={1}
			>
				<SwiperSlide>
					<Image src="/images/carousel/machine-1.JPG" layout="responsive" width={2000} height={750} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/images/carousel/machine-2.JPG" layout="responsive" width={2000} height={750} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/images/carousel/working-1.JPG" layout="responsive" width={2000} height={750} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/images/carousel/working-2.JPG" layout="responsive" width={2000} height={750} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/images/carousel/working-3.JPG" layout="responsive" width={2000} height={750} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/images/carousel/working-4.JPG" layout="responsive" width={2000} height={750} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/images/carousel/working-5.JPG" layout="responsive" width={2000} height={750} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/images/carousel/working-6.JPG" layout="responsive" width={2000} height={750} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/images/carousel/working-7.JPG" layout="responsive" width={2000} height={750} />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Carousel;
