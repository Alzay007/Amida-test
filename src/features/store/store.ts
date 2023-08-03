import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../reducers/productsSlice';
import cartReducer from '../reducers/cartSlice';

export const store = configureStore({
  reducer: {
    productsReducer,
    cartReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
