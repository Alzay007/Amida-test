import { Product } from 'types/Product';
import axios from 'axios';
import { AppDispatch } from '../store/store';
import { productsSlice } from './productsSlice';

export const BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(productsSlice.actions.productsFetching());

    const response = await axios.get<Product[]>(BASE_URL + '/products');

    dispatch(productsSlice.actions.productsFetchingSuccess(response.data));
  } catch (e) {
    dispatch(productsSlice.actions.productsFetchingError());
  }
};
