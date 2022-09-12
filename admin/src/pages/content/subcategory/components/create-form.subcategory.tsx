import React, { Dispatch, useEffect } from 'react';
import { Button, Form, Input, message, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../../store/categories/action-creators.categories';

const { Option } = Select;

interface OnFinishProps {
	name: string;
	category: string;
}

interface Props {
	onFinish: (values: OnFinishProps) => void;
}

const SubCategoryForm: React.FC<Props> = ({ onFinish: _onFinish }) => {
	let categories: ICategory[] = useSelector((state: RootState) => state.category.categories);
	const dispatch: Dispatch<any> = useDispatch();

	useEffect(() => {
		dispatch(fetchCategories());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onFinish = (values: OnFinishProps) => {
		if (!values.category) return message.error("Please select the product's category", 1);
		_onFinish(values);
	};

	return (
		<>
			<Form autoComplete='off' onFinish={onFinish}>
				<Form.Item
					label='Name'
					name='name'
					key='1'
					rules={[
						{
							required: true,
							message: `Name required`,
						},
					]}>
					<Input allowClear />
				</Form.Item>
				<Form.Item label='Parent Category' name='category' key='2' required>
					<Select placeholder='Select the parent category' allowClear>
						{categories.map((category: ICategory, index: number) => {
							return (
								<Option key={index} value={category._id}>
									{category.name}
								</Option>
							);
						})}
					</Select>
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

export default SubCategoryForm;
