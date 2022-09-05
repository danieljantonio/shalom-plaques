import * as actionTypes from './action-types.subcategories';

const initState: SubCategoryState = {
	subCategory: {
		_id: '',
		name: '',
		products: [],
	},
	subCategories: [],
};

const subCategoryReducer = (state: SubCategoryState = initState, action: SubCategoryAction) => {
	switch (action.type) {
		case actionTypes.GET_SUBCATEGORIES_SUCCESS:
			return { ...state, subCategories: action.subCategories };
		case actionTypes.CREATE_SUBCATEGORY_SUCCESS:
			return { ...state, subCategories: action.subCategories };
		case actionTypes.DELETE_SUBCATEGORY_SUCCESS:
			return { ...state, subCategories: action.subCategories };
		default:
			return state;
	}
};

export default subCategoryReducer;
