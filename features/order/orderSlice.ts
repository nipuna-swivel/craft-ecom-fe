import { axios } from "@/api";
import { IOrderState } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: IOrderState = {
  loading: false,
  error: null,
  orders: [],
  analytics: {
    totalSales: 0,
    totalOrders: 0,
    totalCraftsSold: 0,
    craftsSoldCount: [],
    topFiveCraftsSold: [],
  },
};

export const addOrder = createAsyncThunk(
  "order/addOrder",
  async (payload: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/orders", payload);
      return data;
    } catch (e: any) {
      throw rejectWithValue(e.response.data.message);
    }
  }
);

export const getAllOrders = createAsyncThunk("order/getAllOrders", async () => {
  try {
    const { data } = await axios.get("/orders");
    return data;
  } catch (e: any) {}
});

export const getAnalytics = createAsyncThunk("order/getAnalytics", async () => {
  try {
    const { data } = await axios.get("/orders/analytics");
    return data;
  } catch (e: any) {}
});

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //add order
    builder
      .addCase(addOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.loading = false;
        // @ts-ignore
        state.error = action.payload;
      });

    //get all orders
    builder
      .addCase(getAllOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.loading = false;
      });

    //get analytics
    builder
      .addCase(getAnalytics.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAnalytics.fulfilled, (state, action) => {
        state.loading = false;
        state.analytics = action.payload;
      })
      .addCase(getAnalytics.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default orderSlice.reducer;
