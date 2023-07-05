import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (params) => {
  const response = await axios.get('https://fakestoreapi.com/products', {params})
  return response.data;
});

export const fetchDiscount = createAsyncThunk('products/fetchDiscount', async (params) => {
  const response = await axios.get('https://fakestoreapi.com/products', {params});
  return response.data;
});

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    discount: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchDiscount.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDiscount.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.discount = action.payload;
      })
      .addCase(fetchDiscount.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;