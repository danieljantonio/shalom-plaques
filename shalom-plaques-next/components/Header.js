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
		<div className="flex flex-col">
			<div className="fixed flex justify-between shadow-sm w-full h-fit">
				<div className="w-2/3 p-2">
					<Image src="/icons/shalom-brand.png" layout="responsive" width={1059} height={239.25} />
				</div>

				<MdKeyboardArrowLeft
					onClick={handleMenu}
					className={
						open
							? 'w-15% h-fit aspect-square text-amber-800 -rotate-90 transition-transform my-auto mr-1'
							: 'w-15% h-fit aspect-square text-amber-800 transition-transform my-auto mr-1'
					}
				/>
			</div>
			<div className={open ? 'flex flex-col text-center shadow-sm text-amber-800 text-xl' : 'scale-0 '}>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/#products">
					<a>Products</a>
				</Link>
				<Link href="/#about">
					<a>About Us</a>
				</Link>
				<Link href="/#contact">
					<a>Contact Us</a>
				</Link>
				<Link href="/#download">
					<a>Download Catalogue</a>
				</Link>
			</div>
		</div>
	);
};

export default Header;
