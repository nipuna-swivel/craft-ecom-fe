import { axios } from "@/api";
import { ICraftState } from "@/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: ICraftState = {
  crafts: [],
  craft: null,
  loading: false,
  error: null,
};

export const fetchCrafts = createAsyncThunk(
  "craft/fetchCrafts",
  async (searchTerm: string) => {
    try {
      const { data } = await axios.get("/crafts?search=" + searchTerm);
      return data;
    } catch (error) {}
  }
);

export const fetchCraftById = createAsyncThunk(
  "craft/fetchCraftById",
  async (craftId: string) => {
    try {
      const { data } = await axios.get(`/crafts/${craftId}`);
      return data;
    } catch (error) {}
  }
);

export const addNewCraft = createAsyncThunk(
  "craft/addNewEmployee",
  async (payload: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/crafts", payload);
      return data;
    } catch (e: any) {
      throw rejectWithValue(e.response.data.message);
    }
  }
);

export const editCraft = createAsyncThunk(
  "craft/updateEmployee",
  async (params: { id: string; payload: any }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/crafts/${params.id}`, params.payload);
      return data;
    } catch (e: any) {
      throw rejectWithValue(e.response.data.message);
    }
  }
);

export const deleteCraftById = createAsyncThunk(
  "craft/deleteEmpById",
  async (craftId: string, { rejectWithValue }) => {
    try {
      await axios.delete(`/crafts/${craftId}`);
      return craftId;
    } catch (e: any) {
      throw rejectWithValue(e.response.data.message);
    }
  }
);

const craftSlice = createSlice({
  name: "craft",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get crafts
    builder
      .addCase(fetchCrafts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCrafts.fulfilled, (state, action) => {
        state.loading = false;
        state.crafts = action.payload;
      })
      .addCase(fetchCrafts.rejected, (state) => {
        state.loading = false;
      });

    //get craft by id
    builder
      .addCase(fetchCraftById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCraftById.fulfilled, (state, action) => {
        state.loading = false;
        state.craft = action.payload;
      })
      .addCase(fetchCraftById.rejected, (state) => {
        state.loading = false;
      });

    //add craft
    builder
      .addCase(addNewCraft.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewCraft.fulfilled, (state, action) => {
        state.loading = false;
        state.crafts = [...state.crafts, action.payload];
      })
      .addCase(addNewCraft.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });

    //update craft
    builder
      .addCase(editCraft.pending, (state) => {
        state.loading = true;
      })
      .addCase(editCraft.fulfilled, (state, action) => {
        state.loading = false;
        const employees = state.crafts.filter(
          (craft) => craft._id !== action.payload?._id
        );
        state.crafts = [...employees, action.payload];
      })
      .addCase(editCraft.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });

    //delete craft
    builder
      .addCase(deleteCraftById.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCraftById.fulfilled, (state, action) => {
        state.loading = false;
        state.crafts = state.crafts.filter(
          (craft) => craft._id !== action.payload
        );
      })
      .addCase(
        deleteCraftById.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export default craftSlice.reducer;
