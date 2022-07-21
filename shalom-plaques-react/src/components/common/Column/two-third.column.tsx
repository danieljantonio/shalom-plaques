import React from 'react';
import './column.scss';
import { ColumnProps } from './interfaces.column';

const ColumnTwoThirds: React.FC<ColumnProps> = ({ children, className }) => {
	return <div className={`col-twothird ${className}`}>{children}</div>;
};

export default ColumnTwoThirds;
