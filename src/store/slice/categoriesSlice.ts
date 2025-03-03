import {createSlice} from '@reduxjs/toolkit';
import {getAllCategories} from '../actions/categoriesActions';
import {CategoriesState} from '../../models/data/categoriesState';

const initialState: CategoriesState = {
  categories: [],
  pending: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllCategories.pending, state => {
        state.pending = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.pending = false;
        state.categories = action.payload;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      });
  },
});

export default categoriesSlice.reducer;
