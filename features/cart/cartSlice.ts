import { createSlice } from "@reduxjs/toolkit";
import { ICartState } from "@/types";

const initialState: ICartState = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (cartItem) => cartItem._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.cartItems.push({ ...action.payload });
      }

      //newly added item price
      const newItemPrice = action.payload.price * action.payload.quantity;

      //total price
      state.totalPrice += newItemPrice;
    },
    removeFromCart: (state, action) => {
      const item = state.cartItems.find(
        (cartItem) => cartItem._id === action.payload
      );

      if (!item) return;

      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );

      //total price
      state.totalPrice -= item.price * item.quantity;
    },
    updateQuantity: (state, action) => {
      const item = state.cartItems.find(
        (cartItem) => cartItem._id === action.payload.id
      );
      if (item) {
        item.quantity = action.payload.quantity;

        state.totalPrice = state.cartItems.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
