import { Product } from 'types/Product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductsState {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  isError: false
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productsFetching(state) {
      state.isLoading = true;
    },
    productsFetchingSuccess(state, action: PayloadAction<Product[]>) {
      state.isLoading = false;
      state.products = action.payload;
    },
    productsFetchingError(state) {
      state.isLoading = false;
      state.isError = true;
    }
  }
});

export default productsSlice.reducer;

export const {
  productsFetching,
  productsFetchingSuccess,
  productsFetchingError
} = productsSlice.actions;
