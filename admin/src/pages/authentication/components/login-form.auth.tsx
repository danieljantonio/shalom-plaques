import { Form, Input, Button } from 'antd';
import { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../store/user/action-creators.user';

const LoginForm: React.FC = () => {
	const dispatch: Dispatch<any> = useDispatch();

	const onFinish = (values: any) => {
		dispatch(login(values));
	};

	let isLoading: boolean = useSelector((state: RootState) => state.loader.loading);

	return (
		<>
			{isLoading ? (
				<h1>Logging In</h1>
			) : (
				<Form
					name='basic'
					initialValues={{
						remember: true,
					}}
					onFinish={onFinish}
					autoComplete='off'
				>
					<Form.Item
						label='Email'
						name='email'
						rules={[
							{
								required: true,
								message: 'Please input your email!',
							},
						]}
					>
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
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item>
						<Button type='primary' htmlType='submit'>
							Submit
						</Button>
					</Form.Item>
				</Form>
			)}
		</>
	);
};

export default LoginForm;
