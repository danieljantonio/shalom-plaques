import * as actionTypes from './action-types.user';

const getToken = localStorage.getItem('__at');
const setToken = (at: string) => localStorage.setItem('__at', at);
const removeToken = () => localStorage.removeItem('__at');

const user: IUser = {
	email: 'daniel@email.com',
	id: 'asdf34109s',
	name: 'Daniel Antonio',
};

const initState = {
	user: {},
	isAuthenticated: getToken !== null,
};

const userReducer = (state: UserState = initState, action: UserAction) => {
	switch (action.type) {
		case actionTypes.LOGIN_SUCCESS:
			setToken('asdf');
			return { ...state, isAuthenticated: true, user: user };
		case actionTypes.REGISTER_SUCCESS:
			setToken('asdf');
			return { ...state, isAuthenticated: true, user: user };
		case 'LOGOUT':
			removeToken();
			return state;
		default:
			return state;
	}
};

export default userReducer;
