import {createAsyncThunk} from '@reduxjs/toolkit';
import {postRequest} from '../../service/verbs';
import {AUTH_URLS} from '../../service/urls';

const userLogin = createAsyncThunk('auth/userLogin', async (params: object) => {
  try {
    const response = await postRequest(params, AUTH_URLS.LOGIN);
    console.log('veri', response.data);
    return response.data;
  } catch (error) {
    console.log('error', error.response.message);
  }
});

export {userLogin};
