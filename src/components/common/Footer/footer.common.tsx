import React from 'react';
import ColumnHalf from '../Column/half.column';
import './footer.common.scss';

const Footer: React.FC = () => (
	<div className="footer">
		<ColumnHalf className="footer-left">
			<h2>Shalom Handicrafts</h2>
		</ColumnHalf>
		<ColumnHalf className="footer-right">
			<a href="https://instagram.com/maranathahandicraft" target="_blank" rel="noreferrer">
				Instagram
			</a>
			<a href="https://tokopedia.link/GHd4ZyWiQib" target="_blank" rel="noreferrer">
				Tokopedia
			</a>
			<a
				href="https://wa.me/6282311135240?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20products"
				target="_blank"
				rel="noreferrer">
				Whatsapp
			</a>
		</ColumnHalf>
	</div>
);

export default Footer;
