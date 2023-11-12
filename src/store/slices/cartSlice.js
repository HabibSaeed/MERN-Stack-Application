import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "myCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      console.log(state.items);
    },
    removeToCart: (state, action) => {
      state.items = state.items.filter((item) => {
        item.id !== action.payload.id;
      });
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
