import * as actionTypes from './action-types.subcategories';
import { Dispatch } from 'redux';
import { message } from 'antd';
import { fetchData, postData } from '../../helpers.common';
import axios from 'axios';

type CreateCategory = {
	name: string;
};

export const fetchSubCategories = () => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch({ type: 'LOADING_START' });
			const { subCategories } = await fetchData('/subcategory');

			const action: SubCategoryAction = {
				type: actionTypes.GET_SUBCATEGORIES_SUCCESS,
				subCategories,
			};

			dispatch(action);
			dispatch({ type: 'LOADING_STOP' });
		} catch (error: any) {
			dispatch({ type: actionTypes.GET_SUBCATEGORIES_ERROR });
			dispatch({ type: 'LOADING_STOP' });
		}
	};
};

export const createSubCategory = (newCategory: CreateCategory) => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch({ type: 'LOADING_START' });
			const { subCategory, subCategories } = await postData('/subcategory', newCategory);

			const action: SubCategoryAction = {
				type: actionTypes.CREATE_SUBCATEGORY_SUCCESS,
				subCategory,
				subCategories,
			};

			dispatch(action);
			message.success(`Sub Category ${newCategory.name} created`, 1);
			dispatch({ type: 'LOADING_STOP' });
		} catch (error: any) {
			message.error(`Failed to create subcategory ${newCategory.name}`, 1);
			dispatch({ type: actionTypes.CREATE_SUBCATEGORY_ERROR });
			dispatch({ type: 'LOADING_STOP' });
		}
	};
};

export const deleteSubCategory = (subCategoryId: string) => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch({ type: 'LOADING_START' });
			message.success('Product deleted', 1);
			const { data } = await axios.delete(`/subcategory/${subCategoryId}`);

			const action: SubCategoryAction = {
				type: actionTypes.DELETE_SUBCATEGORY_SUCCESS,
				subCategories: data.subCategories,
			};

			dispatch(action);

			dispatch({ type: 'LOADING_STOP' });
		} catch (error: any) {
			dispatch({ type: 'LOADING_STOP' });
			dispatch({ type: actionTypes.DELETE_SUBCATEGORY_ERROR });
			console.log(error);
			message.error('Failed to delete product', 1);
		}
	};
};
