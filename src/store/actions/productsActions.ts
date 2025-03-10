import {createAsyncThunk} from '@reduxjs/toolkit';
import {PRODUCT_URLS} from '../../service/urls';
import {getRequest} from '../../service/verbs';

const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async (params: {category: string}) => {
    const productsUrl =
      params.category === 'All'
        ? PRODUCT_URLS.ALL_PRODUCTS
        : `${PRODUCT_URLS.CATEGORY_PRODUCTS}/${params.category}`;

    const response = await getRequest(params, productsUrl);
    return response.data;
  },
);

const getBestSellerProducts = createAsyncThunk(
  'products/getBestSellerProducts',
  async (params: {category: string}) => {
    const response = await getRequest(
      params,
      PRODUCT_URLS.BEST_SELLER_PRODUCTS,
    );
    return response.data;
  },
);

const getPopularProducts = createAsyncThunk(
  'products/getPopularProducts',
  async (params: {category: string}) => {
    const response = await getRequest(params, PRODUCT_URLS.POPULAR_PRODUCTS);
    return response.data;
  },
);

const getProductDetail = createAsyncThunk(
  'products/getProductDetail',
  async (params: {id: string}) => {
    const productUrl = `${PRODUCT_URLS.ALL_PRODUCTS}/${params.id}`;
    const response = await getRequest(params, productUrl);
    return response.data;
  },
);

export {
  getBestSellerProducts,
  getPopularProducts,
  getProductDetail,
  getAllProducts,
};
