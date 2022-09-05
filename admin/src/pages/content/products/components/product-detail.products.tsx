import { Empty, Form, Image, Input, Space, Spin } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { Dispatch, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../../../../store/products/action-creators.products';

const ProductDetail: React.FC<{ productId: string }> = ({ productId }) => {
	const dispatch: Dispatch<any> = useDispatch();
	let product: IProduct = useSelector((state: RootState) => state.product.product);
	let loading: Boolean = useSelector((state: RootState) => state.loader.loading);

	useEffect(() => {
		dispatch(fetchSingleProduct(productId));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			{!loading ? (
				<div>
					<Form>
						<Form.Item label='Product Name'>
							<Input defaultValue={product.series} disabled />
						</Form.Item>
						<Form.Item label='Product Description'>
							<TextArea rows={3} defaultValue={product.description} disabled />
						</Form.Item>
						<Form.Item label='Product Category'>
							<Input defaultValue={product.category.name} disabled />
						</Form.Item>
						<Form.Item label='Product SubCategory'>
							<Input defaultValue={product.subCategory.name} disabled />
						</Form.Item>
					</Form>
					<Form layout='vertical'>
						<Form.Item label='Product Images:'>
							{product && product.images.length > 0 ? (
								<Space size='large'>
									{product.images.map((imageUrl) => {
										return <Image width={100} src={`http://localhost:5000/${imageUrl}`} />;
									})}
								</Space>
							) : (
								<Empty style={{ border: '1px solid grey', borderRadius: 5, padding: 30 }} image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span>No image found</span>} />
							)}
						</Form.Item>
					</Form>
				</div>
			) : (
				<Spin />
			)}
		</div>
	);
};

export default ProductDetail;
