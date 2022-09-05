import React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';

interface Props {
	columns: ColumnsType<any>;
	data: CategoryData[] | SubCategoryData[] | ProductData[];
}

const TableComponent: React.FC<Props> = ({ columns, data }) => {
	return <Table columns={columns} dataSource={data} />;
};

export default TableComponent;
