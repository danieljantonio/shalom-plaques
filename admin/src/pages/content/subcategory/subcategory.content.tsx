import { Button, Modal, Space } from 'antd';
import React, { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableComponent from '../../../components/table/table.components';
import { createSubCategory, deleteSubCategory, fetchSubCategories } from '../../../store/subcategories/action-creators.subcategories';
import DrawerComponent from '../../../components/drawer/drawer.components';
import SubCategoryForm from './components/create-form.subcategory';
import { ColumnsType } from 'antd/lib/table';

const SubCategoryContent: React.FC = () => {
	const dispatch: Dispatch<any> = useDispatch();

	let subCategories: ISubCategory[] = useSelector((state: RootState) => state.subcategory.subCategories);
	const isLoading: Boolean = useSelector((state: RootState) => state.loader.isLoading);

	const [data, setData] = useState<SubCategoryData[]>([]);
	const [showDrawer, toggleDrawer] = useState<boolean>(false);
	const [modal, contextHolder] = Modal.useModal();

	useEffect(() => {
		dispatch(fetchSubCategories());
		renderData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		renderData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [subCategories]);

	const getModalConfig = (name: string, id: string): { title: string; content: string; onOk: () => void } => {
		return {
			title: `Delete ${name}`,
			content: `This will remove all products under this sub category. Are you sure you want to delete ${name}?`,
			onOk: async () => {
				dispatch(deleteSubCategory(id));
			},
		};
	};

	const columns: ColumnsType<SubCategoryData> = [
		{
			title: 'Sub Category',
			dataIndex: 'title',
			key: 'subcategory',
			sorter: (a, b) => a.title.length - b.title.length,
			sortDirections: ['ascend', 'descend'],
		},
		{
			title: 'Products',
			dataIndex: 'products',
			key: 'products',
			sorter: (a, b) => a.products - b.products,
			sortDirections: ['ascend', 'descend'],
		},
		{
			title: 'Actions',
			key: 'action',
			render: (_, record) => (
				<Space size='middle'>
					<Button type='primary' danger onClick={() => modal.confirm(getModalConfig(record.title, record.key))}>
						Delete
					</Button>
				</Space>
			),
		},
	];

	const renderData = async () => {
		const data: SubCategoryData[] = await subCategories.map((subCategory: ISubCategory) => {
			return { title: subCategory.name, products: subCategory.products.length, key: subCategory._id };
		});
		setData(data);
	};

	const onFinish = (values: any) => {
		dispatch(createSubCategory(values));
		toggleDrawer(false);
	};

	return (
		<div>
			<div style={{ marginBottom: '0.5rem', width: '100%', height: '3rem' }}>
				<Button style={{ float: 'right' }} type='primary' onClick={() => toggleDrawer(true)}>
					New SubCategory
				</Button>
			</div>
			{isLoading ? <div>Loading</div> : <TableComponent columns={columns} data={data} />}
			<DrawerComponent title='SubCategory' visible={showDrawer} toggleDrawer={(value: boolean) => toggleDrawer(value)}>
				<SubCategoryForm onFinish={onFinish} />
			</DrawerComponent>
			{contextHolder}
		</div>
	);
};

export default SubCategoryContent;
