import React from 'react';
import { baseUrl } from '../../../../../helpers/helpers';
import ColumnThird from '../../../../common/Column/half.column';
import div from '../../../../common/Column/third.column';
import './features.section.scss';

const FeaturesSection: React.FC = () => {
	return (
		<div className="features pad-y50-smo">
			<ColumnThird className="production hide-sm">
				<img src={`${baseUrl}/production/material-wood-2.JPG`} alt="img" className="card" />
			</ColumnThird>
			<ColumnThird className="production">
				<h1>High Quality Handicrafts</h1>
			</ColumnThird>
			<ColumnThird className="production hide-sm">
				<img src={`${baseUrl}/product-banner/product-banner-2.png`} alt="img" className="card" />
			</ColumnThird>
		</div>
	);
};

export default FeaturesSection;
