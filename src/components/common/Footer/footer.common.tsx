import React from 'react';
import ColumnHalf from '../Column/half.column';
import './footer.common.scss';

const Footer: React.FC = () => (
	<div className="footer">
		<ColumnHalf className="footer-left">
			<h2>Shalom Handicrafts</h2>
		</ColumnHalf>
		<ColumnHalf className="footer-right">
			<a href="/">Instagram</a>
			<a href="/">Tokopedia</a>
			<a href="/">Whatsapp</a>
		</ColumnHalf>
	</div>
);

export default Footer;
