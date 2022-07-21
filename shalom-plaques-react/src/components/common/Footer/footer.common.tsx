import React from 'react';
import { socialAnchors } from '../../../helpers/helpers';
import ColumnHalf from '../Column/half.column';
import './footer.common.scss';

const FlagIcon: React.FC<{ isoCode: string }> = ({ isoCode }) => <img src={`https://www.countryflags.io/${isoCode}/flat/32.png`} alt={isoCode}></img>;

const markets = ['us', 'ca', 'gb', 'nl', 'de', 'ro', 'kr', 'jp', 'tw', 'hk', 'sg', 'ae', 'lb', 'kw', 'om', 'bh', 'qa', 'eg', 'in', 'au', 'nz'];

const Footer: React.FC = () => (
	<div className="footer">
		<div className="footer-1">
			<ColumnHalf className="footer-left">
				<h2>Shalom Handicrafts</h2>
			</ColumnHalf>
			<ColumnHalf className="footer-right">{Object.values(socialAnchors).map((socialAnchor: any) => socialAnchor())}</ColumnHalf>
		</div>
		<div className="footer-2">
			<p>Markets: </p>
			{markets.map((market: string) => (
				<FlagIcon isoCode={market} />
			))}
		</div>
	</div>
);

export default Footer;
