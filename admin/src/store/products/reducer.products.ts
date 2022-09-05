import * as actionTypes from './action-types.products';

const initState: ProductState = {
	product: {
		_id: '',
		series: '',
		description: '',
		images: [],
		category: {
			name: '',
		},
		subCategory: {
			name: '',
		},
	},
	products: [],
};

const productReducer = (state: ProductState = initState, action: ProductAction) => {
	switch (action.type) {
		case actionTypes.GET_PRODUCTS_SUCCESS:
			return { ...state, products: action.products };
		case actionTypes.GET_PRODUCTS_ERROR:
			return { ...state, products: [] };
		case actionTypes.GET_PRODUCT_SUCCESS:
			return { ...state, product: action.product };
		case actionTypes.GET_PRODUCT_ERROR:
			return { ...state, product: initState.product };
		case actionTypes.CREATE_PRODUCT_SUCCESS:
			return { ...state, products: action.products };
		case actionTypes.CREATE_PRODUCT_ERROR:
			return { ...state };
		case actionTypes.DELETE_PRODUCTS_SUCCESS:
			return { ...state, products: action.products };
		case actionTypes.DELETE_PRODUCTS_ERROR:
			return { ...state };
		default:
			return state;
	}
};

export default productReducer;
