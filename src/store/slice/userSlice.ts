import {createSlice} from '@reduxjs/toolkit';
import {AuthState} from '../../models/data/authState';
import {userLogin} from '../actions/authActions';
import {UserState} from '../../models/data/userState';

const initialState: UserState = {
  user: null,
  pending: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
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

export default userSlice.reducer;
