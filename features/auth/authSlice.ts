import { axios } from "@/api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  accessToken: null,
  isAuthenticated: false,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (payload: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/login", payload);
      return data;
    } catch (e: any) {
      throw rejectWithValue(e.response.data.message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.accessToken = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    //login
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload.accessToken;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
