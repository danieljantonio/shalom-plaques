import React from 'react';

const Hero = () => {
	return (
		<div className="-z-30 h-fit bg-amber-100 pb-10">
			<div className="w-full text-center">
				<div className="pt-32 text-3xl">Est. 1989</div>
				<div className="font-semibold text-5xl">
					Shalom
					<br />
					Plaques
				</div>
				<div className="text-3xl">Bringing the Word to the ends of the World</div>
				<button className="p-4 bg-amber-800 rounded-md">View Products</button>
			</div>
		</div>
	);
};

export default Hero;
