import { Dispatch } from 'redux';
import * as actionTypes from './action-types.loader';

export const startLoading = () => {
	return (dispatch: Dispatch) => {
		dispatch({ type: actionTypes.LOADING_START });
	};
};
export const stopLoading = () => {
	return (dispatch: Dispatch) => {
		dispatch({ type: actionTypes.LOADING_STOP });
	};
};
