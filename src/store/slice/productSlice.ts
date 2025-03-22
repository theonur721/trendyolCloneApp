import {createSlice} from '@reduxjs/toolkit';
import {ProductsState} from '../../models/data/productsState';

import {
  getAllProducts,
  getBestSellerProducts,
  getPopularProducts,
  getProductDetail,
} from '../actions/productsActions';

const initialState: ProductsState = {
  products: [],
  bestSellerProducts: [],
  popularProducts: [],
  product: {},
  pending: false,
  error: null,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addFavoriteOther: (state, action) => {
      const product = action.payload;
      const existingProductBestSeller = state.bestSellerProducts.find(
        item => item.id === product.id,
      );
      const existingProductPopular = state.popularProducts.find(
        item => item.id === product.id,
      );
      const existingAllProduct = state.products.find(
        item => item.id === product.id,
      );

      if (existingAllProduct) {
        existingAllProduct.isFavorite = !existingAllProduct.isFavorite;
      }

      if (existingProductBestSeller) {
        existingProductBestSeller.isFavorite =
          !existingProductBestSeller.isFavorite;
      }
      if (existingProductPopular) {
        existingProductPopular.isFavorite = !existingProductPopular.isFavorite;
      }
      if (product.id === state.product.id) {
        state.product.isFavorite = !state.product.isFavorite;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllProducts.pending, state => {
        state.pending = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.pending = false;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      })
      .addCase(getBestSellerProducts.fulfilled, (state, action) => {
        state.bestSellerProducts = action.payload;
      })
      .addCase(getPopularProducts.fulfilled, (state, action) => {
        state.popularProducts = action.payload;
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.product = action.payload;
      });
  },
});

export const {addFavoriteOther} = productSlice.actions;
export default productSlice.reducer;
