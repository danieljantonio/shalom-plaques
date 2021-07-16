import React from 'react';
import ColumnHalf from '../../../../common/Column/half.column';
import './tagline.section.scss';

const TagLineSection: React.FC = () => {
	return (
		<div className="row">
			<ColumnHalf></ColumnHalf>
			<ColumnHalf></ColumnHalf>
		</div>
	);
};

export default TagLineSection;
