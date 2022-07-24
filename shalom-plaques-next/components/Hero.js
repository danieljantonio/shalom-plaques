import React from 'react';

const Hero = () => {
	return (
		<div className="absolute z-50 h-fit  lg:h-full lg:w-full bg-gradient-to-b from-toph to-topb">
			<div className="w-full h-full text-center text-white p-1/10 font-serif">
				<div className=" text-3xl font-extralight">Est. 1989</div>
				<div className="font-semibold text-5xl lg:text-7xl pb-5">
					Shalom
					<br />
					Plaques
				</div>
				<div className="text-3xl  pb-5">Bringing the Word to the ends of the World</div>
				<button className="p-4 bg-amber-800 rounded-lg">View Products</button>
			</div>
		</div>
	);
};

export default Hero;
