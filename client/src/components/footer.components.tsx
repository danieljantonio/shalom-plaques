import React from 'react';
import ReactCountryFlag from 'react-country-flag';

const countries = ['US', 'GB', 'DE', 'NL', 'RO', 'KR', 'JP', 'TW', 'HK', 'SG', 'AE', 'LB', 'KW', 'OM', 'BH', 'QA', 'EG', 'IN', 'AU', 'NZ', 'ID', 'FJ'];

const Footer: React.FC = () => {
	return (
		<footer className='w-full border-t-2 px-4 text-xs flex  flex-col justify-between font-serif mt-5 overflow-hidden max-h-fit absolute bottom-0'>
			<div className='flex justify-between flex-col lg:flex-row'>
				<div className='py-4 w-full lg:w-1/3 text-center lg:text-left'>Copyright © {new Date().getFullYear()} Shalom Plaques, Inc. All rights reserved.</div>
				<div className='border-y-2 lg:border-none lg:text-right flex'>
					<div className='mx-auto w-fit my-2 flex items-center'>
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
			</div>
			<div className='w-full py-4 flex flex-wrap justify-center lg:border-t-2'>
				{countries.map((countryCode, i) => (
					<ReactCountryFlag countryCode={countryCode} svg key={i} style={{ width: '1.5rem', height: 'auto', margin: '0.25rem', border: '1px grey solid' }} />
				))}
			</div>
		</footer>
	);
};

export default Footer;
