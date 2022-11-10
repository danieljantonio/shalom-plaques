import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer className='w-full border-t-2 px-4 text-xs flex lg:flex-row flex-col justify-between font-serif mt-5 overflow-hidden'>
			<div className='py-4 w-full lg:w-1/3'>Copyright © {new Date().getFullYear()} Shalom Plaques, Inc. All rights reserved.</div>
			<div className='m-auto border-t-2 lg:border-none'>
				<div className='mx-auto w-fit my-2'>
					<a className='mr-2' href='https://www.instagram.com/maranathahandicraft/'>
						Instagram
					</a>
					<a className='mr-2' href='https://api.whatsapp.com/send/?phone=62089675659317'>
						WhatsApp
					</a>
					<a className='mr-2' href='https://www.tokopedia.com/maranathahc'>
						Tokopedia
					</a>
					<a className='mr-2' href='https://shopee.co.id/maranatha.handicraft'>
						Shopee
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
