import React from 'react';
import './column.scss';
import { ColumnProps } from './interfaces.column';

const ColumnHalf: React.FC<ColumnProps> = ({ children, className }) => {
	return <div className={`col-half ${className}`}>{children}</div>;
};

export default ColumnHalf;
