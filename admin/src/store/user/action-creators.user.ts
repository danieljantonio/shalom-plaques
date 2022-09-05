import * as actionTypes from './action-types.user';
import axios from 'axios';
import { Dispatch } from 'redux';
import { message } from 'antd';
import { delay } from '../../helpers.common';

type LoginCredentials = {
	email: string;
	password: string;
};

type RegisterCredentials = {
	name: string;
	email: string;
	password: string;
	phone: string;
};

export const login = (credentials: LoginCredentials) => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch({ type: 'LOADING_START' });
			message.loading('Logging in...', 1);
			const { data } = await axios.post(`/auth/login`, credentials);
			const { status, token, user } = data;

			if (status !== 200) throw Error('Failed to login');

			const action: UserAction = {
				type: actionTypes.LOGIN_SUCCESS,
				user,
				token,
			};
			await delay(1000);
			dispatch(action);
			dispatch({ type: 'LOADING_STOP' });
			message.success(`Welcome ${user.name}`);
		} catch (error: any) {
			dispatch({ type: actionTypes.LOGIN_ERROR });
			dispatch({ type: 'LOADING_STOP' });
		}
	};
};

export const register = (credentials: RegisterCredentials) => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch({ type: 'LOADING_START' });
			message.loading('Registering...', 1);
			await delay(3000);
			// const { name, email, password, phone } = credentials;
			const action: UserAction = {
				type: actionTypes.REGISTER_SUCCESS,
				// user,
				token: '',
			};
			dispatch(action);
			dispatch({ type: 'LOADING_STOP' });
		} catch (error) {
			dispatch({ type: actionTypes.REGISTER_ERROR });
			dispatch({ type: 'LOADING_STOP' });
		}
	};
};

export const logout = () => {
	return async (dispatch: Dispatch) => {
		dispatch({ type: actionTypes.LOGOUT });
		await delay(1000);
		window.location.href = '/';
	};
};
