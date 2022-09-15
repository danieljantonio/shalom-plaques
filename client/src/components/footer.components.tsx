import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer className='w-full border-t-2 p-4 text-sm flex justify-between font-serif mt-5'>
			<div>Copyright © {new Date().getFullYear()} Shalom Plaques, Inc. All rights reserved.</div>
			<div></div>
		</footer>
	);
};

export default Footer;
