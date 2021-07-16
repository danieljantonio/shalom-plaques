import React from 'react';
import ColumnHalf from '../../../../common/Column/half.column';
import './tagline.section.scss';

const TagLineSection: React.FC = () => {
	return (
		<div className="tagline row">
			<ColumnHalf className="center-xy">
				<div className="tag-header">
					<h1>Shalom Plaques</h1>
					<p>Bringing Word to the ends of the world</p>
				</div>
			</ColumnHalf>
			<ColumnHalf>
				<p>Tagline will be here</p>
			</ColumnHalf>
		</div>
	);
};

export default TagLineSection;
