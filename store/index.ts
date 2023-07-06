import { configureStore } from "@reduxjs/toolkit";
import craftReducer from "@/features/craft/craftSlice";
import cartSlice from "@/features/cart/cartSlice";
import orderSlice from "@/features/order/orderSlice";
import authSlice from "@/features/auth/authSlice";

export const store = configureStore({
  reducer: {
    craft: craftReducer,
    cart: cartSlice,
    order: orderSlice,
    auth: authSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
