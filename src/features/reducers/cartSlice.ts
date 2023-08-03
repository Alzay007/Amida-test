import { Sum } from 'types/Sum';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  items: string[];
  sumOfItems: Sum;
}

const initialState: CartState = {
  items: [],
  sumOfItems: {}
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const index = state.items.findIndex((id) => id === itemId);
      if (index !== -1) {
        state.items.splice(index, 1);
      }

      delete state.sumOfItems[itemId];
    },
    addItems: (state, action: PayloadAction<string[]>) => {
      state.items = action.payload;
    },
    clearCart: (state) => {
      state.items = [];
      state.sumOfItems = {};
    },
    setSumOfItems: (state, action) => {
      const { id, price, count } = action.payload;
      state.sumOfItems[id] = price * count;
    }
  }
});

export const { addItem, addItems, removeItem, clearCart, setSumOfItems } =
  cartSlice.actions;

export default cartSlice.reducer;
