import { Button, Modal, Space } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React, { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DrawerComponent from '../../../components/drawer/drawer.components';
import TableComponent from '../../../components/table/table.components';
import { createCategory, deleteCategory, fetchCategories } from '../../../store/categories/action-creators.categories';
import CategoryForm from './components/create-form.category';

const CategoryContent: React.FC = () => {
	const dispatch: Dispatch<any> = useDispatch();
	let categories: ICategory[] = useSelector((state: RootState) => state.category.categories);
	const isLoading: Boolean = useSelector((state: RootState) => state.loader.isLoading);

	const [showDrawer, toggleDrawer] = useState<boolean>(false);
	const [data, setData] = useState<CategoryData[]>([]);
	const [modal, contextHolder] = Modal.useModal();

	useEffect(() => {
		dispatch(fetchCategories());
		renderData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		renderData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [categories]);

	const getModalConfig = (name: string, id: string): { title: string; content: string; onOk: () => void } => {
		return {
			title: `Delete ${name}`,
			content: `This will remove all sub categories and products under this category. Are you sure you want to delete ${name}?`,
			onOk: async () => {
				dispatch(deleteCategory(id));
			},
		};
	};

	const columns: ColumnsType<CategoryData> = [
		{
			title: 'Category',
			dataIndex: 'category',
			key: 'category',
			sorter: (a, b) => a.category.length - b.category.length,
			sortDirections: ['ascend', 'descend'],
		},
		{
			title: 'Sub Categories',
			dataIndex: 'subcategory',
			key: 'subcat',
			sorter: (a, b) => a.subcategory - b.subcategory,
			sortDirections: ['ascend', 'descend'],
		},
		{
			title: 'Actions',
			key: 'action',
			render: (_, record) => (
				<Space size='middle'>
					<Button type='primary' danger onClick={() => modal.confirm(getModalConfig(record.category, record.key))}>
						Delete
					</Button>
				</Space>
			),
		},
	];

	const renderData = async () => {
		const data: CategoryData[] = await categories.map((category: ICategory) => {
			return { category: category.name, subcategory: category.subCategories.length || 0, key: category._id };
		});
		setData(data);
	};

	const onFinish = (value: { name: string }) => {
		dispatch(createCategory(value));
		toggleDrawer(false);
	};

	return (
		<div>
			<div style={{ marginBottom: '0.5rem', width: '100%', height: '3rem' }}>
				<Button style={{ float: 'right' }} type='primary' onClick={() => toggleDrawer(true)}>
					New Category
				</Button>
			</div>
			{isLoading ? <div>Loading</div> : <TableComponent columns={columns} data={data} />}
			<DrawerComponent title='Category' visible={showDrawer} toggleDrawer={(value: boolean) => toggleDrawer(value)}>
				<CategoryForm onFinish={onFinish} />
			</DrawerComponent>
			{contextHolder}
		</div>
	);
};

export default CategoryContent;
