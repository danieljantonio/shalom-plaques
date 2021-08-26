import React from 'react';
import { baseUrl } from '../../../../../helpers/helpers';
import ColumnHalf from '../../../../common/Column/half.column';
import './features.section.scss';

const FeaturesSection: React.FC = () => {
	return (
		<div className="features pad-y50-smo">
			<div className="row container">
				<ColumnHalf className="center-y hide-sm">
					<img src={`${baseUrl}/sample-images/woodwork-test-1.jpeg`} alt="img" className="card mag-y50" />
				</ColumnHalf>
				<ColumnHalf className="center-xy">
					<div className="tag-header">
						<h1 className="">High quality wood</h1>
						<h2>Bringing Word to the ends of the world</h2>
					</div>
				</ColumnHalf>
			</div>
			<div className="row container">
				<ColumnHalf className="center-xy">
					<div className="tag-header">
						<h1 className="">Shalom Plaques</h1>
						<h2>Bringing Word to the ends of the world</h2>
					</div>
				</ColumnHalf>

				<ColumnHalf className="center-y hide-sm">
					<img src={`${baseUrl}/sample-images/woodwork-test-3.jpeg`} alt="img" className="card mag-y50" />
				</ColumnHalf>
			</div>
		</div>
	);
};

export default FeaturesSection;
