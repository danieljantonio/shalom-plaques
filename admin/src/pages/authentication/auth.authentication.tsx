import React, { useState } from 'react';
import './auth.authentication.scss';
import { Divider } from 'antd';
import LoginForm from './components/login-form.auth';
import RegisterForm from './components/register-form.auth';

const AuthAuthentication: React.FC = () => {
	const [isLogin, setIsLogin] = useState<boolean>(true);

	return (
		<div className='auth-page'>
			<div className='card-container'>
				{isLogin ? <LoginForm /> : <RegisterForm />}
				<Divider />
				{isLogin ? (
					<p className='auth-navigation'>
						Don't have an account?{' '}
						<span className='auth-navigate' onClick={() => setIsLogin(false)}>
							Register Here
						</span>
					</p>
				) : (
					<p className='auth-navigation'>
						Have an account?{' '}
						<span className='auth-navigate' onClick={() => setIsLogin(true)}>
							Login Here
						</span>
					</p>
				)}
			</div>
		</div>
	);
};

export default AuthAuthentication;
