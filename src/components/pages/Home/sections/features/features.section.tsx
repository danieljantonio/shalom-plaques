import React from 'react';
import { baseUrl } from '../../../../../helpers/helpers';
import div from '../../../../common/Column/third.column';
import './features.section.scss';

const FeaturesSection: React.FC = () => {
	return (
		<div className="features pad-y50-smo">
			<div className="production">
				<img src={`${baseUrl}/production/material-wood-2.JPG`} alt="img" className="card" />
			</div>
			<div className="arrows">
				<img src={`${baseUrl}/icons/arrow-diagonal-black.png`} alt="arrow" className="arrow-icon" />
				<img src={`${baseUrl}/icons/arrow-diagonal-black.png`} alt="arrow" className="arrow-icon reverse" />
			</div>
			<div className="production">
				<img src={`${baseUrl}/product-banner/product-banner-2.png`} alt="img" className="card" />
			</div>
		</div>
	);
};

export default FeaturesSection;
