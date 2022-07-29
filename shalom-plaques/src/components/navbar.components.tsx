import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
	return (
		<div className='navbar bg-base-100 shadow-md z-50'>
			<div className='navbar-start'>
				<Link href='/'>
					<div className='h-11 aspect-logo hover:cursor-pointer btn-ghost rounded-md'>
						<Image src='/icons/shalom-brand2.png' width={4236} height={957} layout='responsive' />
					</div>
				</Link>
			</div>
			<Link href='/' className='navbar-center'>
				<a className='btn btn-ghost normal-case text-xl text-primary'>Shalom Plaques</a>
			</Link>

			<div className='navbar-end'>
				<Link href='/products' className='navbar-end'>
					<a className='btn btn-ghost normal-case text-xl text-primary'>Products</a>
				</Link>
				<Link href='/about-us' className='navbar-end'>
					<a className='btn btn-ghost normal-case text-xl text-primary'>About Us</a>
				</Link>
				<Link href='/contact-us' className='navbar-end'>
					<a className='btn btn-ghost normal-case text-xl text-primary'>Contact Us</a>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
