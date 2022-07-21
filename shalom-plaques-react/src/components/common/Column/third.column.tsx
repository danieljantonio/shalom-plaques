import React from 'react';
import './column.scss';
import { ColumnProps } from './interfaces.column';

const ColumnThirds: React.FC<ColumnProps> = ({ children, className }) => {
	return <div className={`col-third ${className}`}>{children}</div>;
};

export default ColumnThirds;
