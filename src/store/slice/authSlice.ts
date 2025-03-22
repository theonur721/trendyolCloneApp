import {createSlice} from '@reduxjs/toolkit';
import {AuthState} from '../../models/data/authState';
import {userLogin} from '../actions/authActions';

const initialState: AuthState = {
  isLogin: false,
  user: null,
  pending: false,
  error: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(userLogin.pending, state => {
        state.pending = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLogin = true;
        state.pending = false;
        state.token = action.payload.token;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
        state.isLogin = false;
      });
  },
});

// export const {setCategory} = authSlice.actions;

export default authSlice.reducer;
