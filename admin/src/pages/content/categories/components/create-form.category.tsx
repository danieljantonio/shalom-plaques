import { Button, Form, Input } from 'antd';
import React from 'react';

interface Props {
	onFinish: (value: { name: string }) => void;
}

const CategoryForm: React.FC<Props> = ({ onFinish: _onFinish }) => {
	const onFinish = (values: { name: string }) => {
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
				<Form.Item>
					<Button type='primary' htmlType='submit' style={{ float: 'right' }}>
						Create
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};

export default CategoryForm;
