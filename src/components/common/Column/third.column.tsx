import React from 'react';
import './column.scss';
import { ColumnProps } from './interfaces.column';

const ColumnThirds: React.FC<ColumnProps> = ({ children }) => {
	return <div className="col-third">{children}</div>;
};

export default ColumnThirds;
