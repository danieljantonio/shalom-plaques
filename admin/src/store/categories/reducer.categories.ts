import * as actionTypes from './action-types.categories';

const initState = {
	category: {
		_id: '',
		name: '',
		subCategories: [],
	},
	categories: [],
};

const categoryReducer = (state: CategoryState = initState, action: CategoryAction) => {
	switch (action.type) {
		case actionTypes.GET_CATEGORIES_SUCCESS:
			return { ...state, categories: action.categories };
		case actionTypes.CREATE_CATEGORY_SUCCESS:
			return { ...state, categories: action.categories };
		case actionTypes.DELETE_CATEGORY_SUCCESS:
			return { ...state, categories: action.categories };
		default:
			return state;
	}
};

export default categoryReducer;
