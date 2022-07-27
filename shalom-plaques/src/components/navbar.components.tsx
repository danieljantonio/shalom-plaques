import React from 'react';
import Image from 'next/image';
const Navbar = () => {
	return (
		<div className='navbar bg-base-100 shadow-md z-50'>
			<div className='navbar-start'>
				<div className='h-11 aspect-logo'>
					<Image src='/icons/shalom-brand.png' width={4236} height={957} layout='responsive' />
				</div>
			</div>
			<div className='navbar-center'>
				<a className='btn btn-ghost normal-case text-xl text-primary'>daisyUI</a>
			</div>
			<div className='navbar-end'>Test</div>
		</div>
	);
};

export default Navbar;
