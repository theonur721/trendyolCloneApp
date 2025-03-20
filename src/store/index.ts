import {configureStore} from '@reduxjs/toolkit';
import {productSlice} from './slice/productSlice';
import {categoriesSlice} from './slice/categoriesSlice';
import {cartSlice} from './slice/cartSlice';
import {authSlice} from './slice/authSlice';

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    categories: categoriesSlice.reducer,
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
