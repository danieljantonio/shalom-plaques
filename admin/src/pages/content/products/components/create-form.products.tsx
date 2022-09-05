import React, { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input, message, Select, Upload, UploadProps } from 'antd';
import { fetchCategories } from '../../../../store/categories/action-creators.categories';
import { fetchSubCategories } from '../../../../store/subcategories/action-creators.subcategories';
import { InboxOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';

const { Option } = Select;

interface Props {
	onFinish: (values: any) => void;
}

const ProductForm: React.FC<Props> = ({ onFinish: _onFinish }) => {
	let categories: ICategory[] = useSelector((state: RootState) => state.category.categories);
	let subCategories: ISubCategory[] = useSelector((state: RootState) => state.subcategory.subCategories);
	const dispatch: Dispatch<any> = useDispatch();
	const [fitleredSubCategories, setFilteredSubCategories] = useState<ISubCategory[]>([]);

	useEffect(() => {
		dispatch(fetchCategories());
		dispatch(fetchSubCategories());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onFinish = (values: any) => {
		if (!values.category) return message.error("Please select the product's category", 1);
		if (!values.subCategory) return message.error("Please select the product's subCategory", 1);

		_onFinish(values);
	};

	const onSelectCategory = (value: string) => {
		const category = categories.filter((category: ICategory) => category._id === value)[0];
		setFilteredSubCategories(category.subCategories);
	};

	const drawerProps: UploadProps = {
		name: 'file',
		multiple: true,
		accept: 'image/png, image/jpg, image/jpeg',
		listType: 'picture',
		customRequest: (options) => {
			try {
				const { onSuccess = (a: string) => {} } = options;
				onSuccess('ok');
			} catch (error) {}
		},
	};

	return (
		<>
			<Form autoComplete='off' onFinish={onFinish} encType='multipart/form-data'>
				<Form.Item
					label='Series'
					name='series'
					key='1'
					rules={[
						{
							required: true,
							message: `Series required`,
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label='Description'
					name='description'
					key='2'
					rules={[
						{
							required: true,
							message: `Description required`,
						},
					]}
				>
					<TextArea />
				</Form.Item>
				<Form.Item label='Category' name='category' key='3' required>
					<Select placeholder='Select the parent category' onChange={onSelectCategory}>
						{categories.map((category: ICategory, index: number) => {
							return (
								<Option key={index} value={category._id}>
									{category.name}
								</Option>
							);
						})}
					</Select>
				</Form.Item>
				<Form.Item label='SubCategory' name='subCategory' key='4' required>
					<Select placeholder='Select the parent category' value={null}>
						{fitleredSubCategories.map((subCategory: ISubCategory, index: number) => {
							return (
								<Option key={index} value={subCategory._id}>
									{subCategory.name}
								</Option>
							);
						})}
					</Select>
				</Form.Item>
				<Form.Item label='Dragger' name='images'>
					<Upload.Dragger {...drawerProps}>
						<p className='ant-upload-drag-icon'>
							<InboxOutlined />
						</p>
						<p className='ant-upload-text'>Click or drag file to this area to upload</p>
						<p className='ant-upload-hint'>Support for a single or bulk upload.</p>
					</Upload.Dragger>
				</Form.Item>
				<Form.Item>
					<Button type='primary' htmlType='submit' style={{ float: 'right' }}>
						Create
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};

export default ProductForm;
