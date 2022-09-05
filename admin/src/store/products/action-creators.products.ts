import * as actionTypes from './action-types.products';
import axios from 'axios';
import { Dispatch } from 'redux';
import { message } from 'antd';
import { fetchData } from '../../helpers.common';
import { UploadFile } from 'antd/lib/upload/interface';

type Files = {
	file: UploadFile;
	fileList: UploadFile[];
};

type CreateProduct = {
	series: string;
	description: string;
	category: string;
	subCategory: string;
	images: Files;
};

export const fetchProducts = () => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch({ type: 'LOADING_START' });
			const { products } = await fetchData('/product');

			const action: ProductAction = {
				type: actionTypes.GET_PRODUCTS_SUCCESS,
				products: products as ProductType[],
			};

			dispatch(action);
			dispatch({ type: 'LOADING_STOP' });
		} catch (error: any) {
			dispatch({ type: actionTypes.GET_PRODUCTS_ERROR });
			dispatch({ type: 'LOADING_STOP' });
		}
	};
};

export const fetchSingleProduct = (productId: string) => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch({ type: 'LOADING_START' });
			const { product } = await fetchData(`/product/${productId}`);
			const action: ProductAction = {
				type: actionTypes.GET_PRODUCT_SUCCESS,
				product,
			};
			dispatch(action);
			dispatch({ type: 'LOADING_STOP' });
		} catch (error) {
			dispatch({ type: actionTypes.GET_PRODUCT_ERROR });
			dispatch({ type: 'LOADING_STOP' });
		}
	};
};

export const createProduct = (newProduct: CreateProduct) => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch({ type: 'LOADING_START' });
			const formData = new FormData();
			formData.append('series', newProduct.series);
			formData.append('description', newProduct.description);
			formData.append('category', newProduct.category);
			formData.append('subCategory', newProduct.subCategory);

			if (newProduct.images && newProduct.images?.fileList?.length > 0) {
				for (const imageFile of newProduct.images.fileList) {
					formData.append('file', imageFile.originFileObj as File);
				}
			}

			const { data } = await axios.post('/product', formData, { headers: { 'Content-Type': 'multipart/form-data' } });

			const action: ProductAction = {
				type: actionTypes.CREATE_PRODUCT_SUCCESS,
				products: data.products as ProductType[],
			};

			dispatch(action);
			message.success(`Product ${newProduct.series} created`);
			dispatch({ type: 'LOADING_STOP' });
		} catch (error: any) {
			message.error(`Failed to create product ${newProduct.series}`, 1);
			dispatch({ type: actionTypes.CREATE_PRODUCT_ERROR });
			dispatch({ type: 'LOADING_STOP' });
		}
	};
};

export const deleteProduct = (productId: string) => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch({ type: 'LOADING_START' });
			message.success('Product deleted', 1);
			const { data } = await axios.delete(`/product/${productId}`);

			const action: ProductAction = {
				type: actionTypes.DELETE_PRODUCTS_SUCCESS,
				products: data.products as ProductType[],
			};

			dispatch(action);

			dispatch({ type: 'LOADING_STOP' });
		} catch (error: any) {
			dispatch({ type: 'LOADING_STOP' });
			message.error('Failed to delete product', 1);
		}
	};
};
