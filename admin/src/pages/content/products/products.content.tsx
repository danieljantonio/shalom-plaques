import React, { Dispatch, useEffect, useState } from 'react';
import { Button, Modal, Space } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { useDispatch, useSelector } from 'react-redux';
import BottomDrawerComponent from '../../../components/bottom-drawer/bottom-drawer.components';
import DrawerComponent from '../../../components/drawer/drawer.components';
import TableComponent from '../../../components/table/table.components';
import { createProduct, deleteProduct, fetchProducts } from '../../../store/products/action-creators.products';
import ProductForm from './components/create-form.products';
import ProductDetail from './components/product-detail.products';

const ProductsContent: React.FC = () => {
	const dispatch: Dispatch<any> = useDispatch();
	let products: ProductType[] = useSelector((state: RootState) => state.product.products);
	const isLoading: Boolean = useSelector((state: RootState) => state.loader.isLoading);

	const [data, setData] = useState<ProductData[]>([]);
	const [showDrawer, toggleDrawer] = useState<boolean>(false);
	const [showBottomDrawer, toggleBottomDrawer] = useState<boolean>(false);
	const [productId, setProductId] = useState<string>('');
	const [modal, contextHolder] = Modal.useModal();

	useEffect(() => {
		dispatch(fetchProducts());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		renderData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [products]);

	const onFinish = (values: any) => {
		dispatch(createProduct(values));
		toggleDrawer(false);
	};

	const getModalConfig = (name: string, id: string): { title: string; content: string; onOk: () => void } => {
		return {
			title: `Delete ${name}`,
			content: `Are you sure you want to delete ${name}?`,
			onOk: async () => {
				dispatch(deleteProduct(id));
			},
		};
	};

	const columns: ColumnsType<ProductData> = [
		{
			title: 'Series',
			dataIndex: 'series',
			key: 'series',
			sorter: (a, b) => a.series.length - b.series.length,
			sortDirections: ['ascend', 'descend'],
		},
		{
			title: 'Description',
			dataIndex: 'description',
			key: 'description',
			sorter: (a, b) => a.description.length - b.description.length,
			sortDirections: ['ascend', 'descend'],
		},
		{
			title: 'Category',
			dataIndex: 'category',
			key: 'category',
			sorter: (a, b) => a.category.length - b.category.length,
			sortDirections: ['ascend', 'descend'],
		},
		{
			title: 'SubCategory',
			dataIndex: 'subcategory',
			key: 'subcategory',
			sorter: (a, b) => a.subcategory.length - b.subcategory.length,
			sortDirections: ['ascend', 'descend'],
		},
		{
			title: 'Images',
			dataIndex: 'images',
			key: 'images',
		},
		{
			title: 'Actions',
			key: 'action',
			render: (_, record) => (
				<Space size='middle'>
					<Button type='primary' onClick={() => onClick(record.key)}>
						Details
					</Button>
					<Button type='primary' danger onClick={() => modal.confirm(getModalConfig(record.series, record.key))}>
						Delete
					</Button>
				</Space>
			),
		},
	];

	const renderData = async () => {
		const data: ProductData[] = await products.map((product: ProductType) => {
			return { series: product.series, description: product.description, category: product.category.name, subcategory: product.subCategory.name, images: product.images.length, key: product._id };
		});
		setData(data);
	};

	const onClick = (productId: string) => {
		toggleBottomDrawer(true);
		setProductId(productId);
	};

	return (
		<div>
			<div style={{ marginBottom: '0.5rem', width: '100%', height: '3rem' }}>
				<Button style={{ float: 'right' }} type='primary' onClick={() => toggleDrawer(true)}>
					New Product
				</Button>
			</div>
			{isLoading ? <div>Loading</div> : <TableComponent columns={columns} data={data} />}
			<DrawerComponent title='Product' visible={showDrawer} toggleDrawer={(value: boolean) => toggleDrawer(value)}>
				<ProductForm onFinish={onFinish} />
			</DrawerComponent>
			<BottomDrawerComponent title='Product' visible={showBottomDrawer} toggleDrawer={(value: boolean) => toggleBottomDrawer(value)}>
				<ProductDetail productId={productId} />
			</BottomDrawerComponent>
			{contextHolder}
		</div>
	);
};

export default ProductsContent;
