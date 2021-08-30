import React from 'react';
import { socialLinks } from '../../../helpers/helpers';
import ColumnHalf from '../Column/half.column';
import './footer.common.scss';

const Footer: React.FC = () => (
	<div className="footer">
		<ColumnHalf className="footer-left">
			<h2>Shalom Handicrafts</h2>
		</ColumnHalf>
		<ColumnHalf className="footer-right">
			{Object.values(socialLinks).map((socialAnchor: any) => socialAnchor())}
		</ColumnHalf>
	</div>
);

export default Footer;
