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
		<>
			<Swiper
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				effect={'fade'}
				grabCursor={true}
				centeredSlides={true}
				rewind={true}
				navigation={true}
				modules={[Navigation, Autoplay]}
				slidesPerView={1}
			>
				<SwiperSlide>
					<Image src="/images/carousel/machine-1.JPG" layout="responsive" width={1500} height={1000} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/images/carousel/machine-2.JPG" layout="responsive" width={1500} height={1000} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/images/carousel/working-1.JPG" layout="responsive" width={1500} height={1000} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/images/carousel/working-2.JPG" layout="responsive" width={1500} height={1000} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/images/carousel/working-3.JPG" layout="responsive" width={1500} height={1000} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/images/carousel/working-4.JPG" layout="responsive" width={1500} height={1000} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/images/carousel/working-5.JPG" layout="responsive" width={1500} height={1000} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/images/carousel/working-6.JPG" layout="responsive" width={1500} height={1000} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/images/carousel/working-7.JPG" layout="responsive" width={1500} height={1000} />
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default Carousel;
