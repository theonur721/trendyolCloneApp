import {createAsyncThunk} from '@reduxjs/toolkit';
import {PRODUCT_URLS} from '../../service/urls';
import {getRequest} from '../../service/verbs';
import {Params} from '../../models/data/productsState';

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

const getProductDetail = createAsyncThunk(
  'products/getProductDetail',
  async (params: Params) => {
    const productUrl = `${PRODUCT_URLS.ALL_PRODUCTS}/${params.id}`;
    const response = await getRequest(params, productUrl);
    return response.data;
  },
);
export {getBestSellerProducts, getPopularProducts, getProductDetail};
