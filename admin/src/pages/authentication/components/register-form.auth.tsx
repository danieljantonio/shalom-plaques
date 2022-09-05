import React from 'react';
import { Form, Input, Button } from 'antd';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { register } from '../../../store/user/action-creators.user';

const RegisterForm: React.FC = () => {
	const dispatch: Dispatch<any> = useDispatch();
	const onFinish = (values: any) => {
		dispatch(register(values));
	};

	return (
		<Form name='basic' onFinish={onFinish} autoComplete='off'>
			<Form.Item
				label='Name'
				name='name'
				rules={[
					{
						required: true,
						message: 'Please input your name!',
					},
				]}>
				<Input />
			</Form.Item>

			<Form.Item
				label='Email'
				name='email'
				rules={[
					{
						required: true,
						message: 'Please input your email!',
					},
				]}>
				<Input />
			</Form.Item>
			<Form.Item
				label='Phone Number'
				name='phone'
				rules={[
					{
						required: true,
						message: 'Please input your phone number!',
					},
				]}>
				<Input />
			</Form.Item>

			<Form.Item
				label='Password'
				name='password'
				rules={[
					{
						required: true,
						message: 'Please input your password!',
					},
				]}>
				<Input.Password />
			</Form.Item>

			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default RegisterForm;
