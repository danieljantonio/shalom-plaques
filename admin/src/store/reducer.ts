import { combineReducers } from 'redux';
import categoryReducer from './categories/reducer.categories';
import subCategoryReducer from './subcategories/reducer.subcategories';
import loaderReducer from './loader/reducer.loader';
import userReducer from './user/reducer.user';
import productReducer from './products/reducer.products';

const rootReducer = combineReducers({
	user: userReducer,
	loader: loaderReducer,
	category: categoryReducer,
	subcategory: subCategoryReducer,
	product: productReducer,
});

export default rootReducer;
