import * as actionTypes from './action-types.categories';
import axios from 'axios';
import { Dispatch } from 'redux';
import { message } from 'antd';
import { postData } from '../../helpers.common';

type CreateCategory = {
	name: string;
};

export const fetchCategories = () => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch({ type: 'LOADING_START' });
			const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/category`);
			const { categories } = data;

			const action: CategoryAction = {
				type: actionTypes.GET_CATEGORIES_SUCCESS,
				categories,
			};

			dispatch(action);
			dispatch({ type: 'LOADING_STOP' });
		} catch (error: any) {
			dispatch({ type: actionTypes.GET_CATEGORIES_ERROR });
			dispatch({ type: 'LOADING_STOP' });
		}
	};
};

export const createCategory = (_newCategory: CreateCategory) => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch({ type: 'LOADING_START' });
			const { newCategory, categories } = await postData('/category', _newCategory);
			const action: CategoryAction = {
				type: actionTypes.CREATE_CATEGORY_SUCCESS,
				category: newCategory,
				categories,
			};
			dispatch(action);
			message.success(`Category ${newCategory.name} created`, 1);
			dispatch({ type: 'LOADING_STOP' });
		} catch (error: any) {
			message.error(`Failed to create category ${_newCategory.name}`, 1);
			dispatch({ type: actionTypes.CREATE_CATEGORY_ERROR });
			dispatch({ type: 'LOADING_STOP' });
		}
	};
};

export const deleteCategory = (categoryId: string) => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch({ type: 'LOADING_START' });
			message.success('Product deleted', 1);
			const { data } = await axios.delete(`${process.env.REACT_APP_API_URL}/category/${categoryId}`);

			const action: CategoryAction = {
				type: actionTypes.DELETE_CATEGORY_SUCCESS,
				categories: data.categories,
			};

			dispatch(action);
			dispatch({ type: 'LOADING_STOP' });
		} catch (error: any) {
			dispatch({ type: 'LOADING_STOP' });
			dispatch({ type: actionTypes.DELETE_CATEGORY_ERROR });
			message.error('Failed to delete product', 1);
		}
	};
};
