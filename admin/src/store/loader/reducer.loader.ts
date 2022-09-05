import * as actionTypes from './action-types.loader';

const initState = {
	loading: false,
};

const loaderReducer = (state: LoaderState = initState, action: LoaderAction) => {
	switch (action.type) {
		case actionTypes.LOADING_START:
			return { loading: true };
		case actionTypes.LOADING_STOP:
			return { loading: false };
		default:
			return state;
	}
};

export default loaderReducer;
