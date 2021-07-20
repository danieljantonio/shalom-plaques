import React from 'react';
import ColumnHalf from '../../../../common/Column/half.column';
import './tagline.section.scss';

const TagLineSection: React.FC = () => {
	return (
		<div className="tagline row pad-y50-smo">
			<ColumnHalf className="center-xy">
				<div className="tag-header pad-y50-smo">
					<h1>Shalom Plaques</h1>
					<p>Bringing the Word to the ends of the world</p>
				</div>
			</ColumnHalf>
			<ColumnHalf className="center-xy hide-sm">
				<img
					src="http://localhost:3000/sample-images/woodwork-test-2.jpeg"
					alt="img"
					className="card mag-y50"
					style={{
						height: '250px',
						width: '350px',
					}}
				/>
			</ColumnHalf>
		</div>
	);
};

export default TagLineSection;
