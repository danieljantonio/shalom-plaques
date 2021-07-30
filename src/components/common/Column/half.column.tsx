import React from 'react';
import './column.scss';
import { ColumnProps } from './interfaces.column';

const ColumnHalf: React.FC<ColumnProps> = ({ children, className = '', style }) => {
	return (
		<div style={style} className={`col-half ${className}`}>
			{children}
		</div>
	);
};

export default ColumnHalf;
