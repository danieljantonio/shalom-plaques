import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
const Header = () => {
	const [open, setOpen] = useState(false);
	const handleMenu = () => {
		const prev = open;
		setOpen(!prev);
	};
	return (
		<div className="fixed top-0 left-0 w-full h-head overflow-hidden bg-amber-100">
			<div className="flex justify-between  w-full h-head m-0 z-50">
				<div className="w-2/3 p-2 lg:w-1/6">
					<Image src="/icons/shalom-brand.png" layout="responsive" width={1059} height={239.25} />
				</div>

				<MdKeyboardArrowLeft
					onClick={handleMenu}
					className={
						open
							? 'w-15% lg:invisible lg:w-0 h-fit aspect-square text-amber-800 -rotate-90 transition-transform my-auto mr-1'
							: 'w-15% lg:invisible lg:w-0 h-fit aspect-square text-amber-800 transition-transform my-auto mr-1'
					}
				/>
			</div>
			<div
				className={
					open
						? 'absolute flex flex-col text-center shadow-lg text-amber-800 text-xl'
						: 'absolute top-0 right-0 w-1/2 h-fit scale-0 lg:flex lg:scale-100 lg:justify-end lg:text-3xl lg:text-center z-50 '
				}
			>
				<Link href="/">
					<a className="p-5 z-50">Home</a>
				</Link>
				<Link href="/#products">
					<a className="p-5">Products</a>
				</Link>
				<Link href="/#about">
					<a className="p-5 whitespace-nowrap">About Us</a>
				</Link>
				<Link href="/#contact">
					<a className="p-5 whitespace-nowrap">Contact Us</a>
				</Link>
				<Link href="/#download">
					<a className="p-5 whitespace-nowrap">Download Catalogue</a>
				</Link>
			</div>
		</div>
	);
}; // bg-gradient-to-b from-toph to-topb

export default Header;
