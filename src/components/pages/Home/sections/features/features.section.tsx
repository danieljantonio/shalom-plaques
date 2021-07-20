import React from 'react';
import ColumnHalf from '../../../../common/Column/half.column';
import './features.section.scss';

const FeaturesSection: React.FC = () => {
	return (
		<div className="features pad-y50-smo">
			<div className="row container">
				<ColumnHalf className="center-y hide-sm">
					<img
						src="http://localhost:3000/sample-images/woodwork-test-1.jpeg"
						alt="img"
						className="card mag-y50"
						style={{
							height: '250px',
							width: '350px',
						}}
					/>
				</ColumnHalf>
				<ColumnHalf className="center-xy">
					<div className="tag-header pad-y50-smo">
						<h1 className="">High quality wood</h1>
						<p>Bringing Word to the ends of the world</p>
					</div>
				</ColumnHalf>
			</div>
			<div className="row container">
				<ColumnHalf className="center-xy">
					<div className="tag-header pad-y50-smo">
						<h1 className="">Shalom Plaques</h1>
						<p>Bringing Word to the ends of the world</p>
					</div>
				</ColumnHalf>

				<ColumnHalf className="center-y hide-sm">
					<img
						src="http://localhost:3000/sample-images/woodwork-test-3.jpeg"
						alt="img"
						className="card mag-y50"
						style={{
							height: '250px',
							width: '350px',
						}}
					/>
				</ColumnHalf>
			</div>
		</div>
	);
};

export default FeaturesSection;
