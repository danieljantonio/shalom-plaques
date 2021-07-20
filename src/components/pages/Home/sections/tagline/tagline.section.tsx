import React from 'react';
import ColumnHalf from '../../../../common/Column/half.column';
import './tagline.section.scss';

const TagLineSection: React.FC = () => {
	return (
		<div className="tagline row pad-y50-smo">
			<ColumnHalf className="center-xy">
				<div className="tag-header pad-y50-smo">
					<h1>Shalom Plaques</h1>
					<p>Bringing Word to the ends of the world</p>
				</div>
			</ColumnHalf>
			<ColumnHalf className="center-xy hide-sm">
				<div className="card mag-y50" style={{ height: '400px', width: '300px', backgroundColor: 'white' }}>
					Image will be here
				</div>
			</ColumnHalf>
		</div>
	);
};

export default TagLineSection;
