import React from 'react';

const Hero = () => {
	return (
		<div className="lg:absolute z-10 h-fit  lg:h-full lg:w-full bg-primary lg:bg-transparent lg:bg-gradient-to-b lg:from-toph lg:to-topb">
			<div className="w-full h-full text-center text-white p-1/10 font-serif">
				<div className=" text-3xl font-extralight">Est. 1989</div>
				<div className="font-semibold text-5xl md:6xl xl:text-7xl pb-5">
					Shalom
					<br />
					Plaques
				</div>
				<div className="text-3xl  pb-5">Bringing the Word to the ends of the World</div>
				<button className="p-4 bg-primary rounded-lg text-3xl">View Products</button>
			</div>
		</div>
	);
};

export default Hero;
