import {createAsyncThunk} from '@reduxjs/toolkit';
import {PRODUCT_URLS} from '../../service/urls';
import {getRequest} from '../../service/verbs';

const getBestSellerProducts = createAsyncThunk(
  'products/getBestSellerProducts',
  async (params: object) => {
    const response = await getRequest(
      params,
      PRODUCT_URLS.BEST_SELLER_PRODUCTS,
    );
    return response.data;
  },
);

const getPopularProducts = createAsyncThunk(
  'products/getPopularProducts',
  async (params: object) => {
    const response = await getRequest(params, PRODUCT_URLS.POPULAR_PRODUCTS);
    return response.data;
  },
);

export {getBestSellerProducts, getPopularProducts};
