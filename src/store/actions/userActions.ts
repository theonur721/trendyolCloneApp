import {createAsyncThunk} from '@reduxjs/toolkit';
import {USERS_URLS} from '../../service/urls';
import {getRequest} from '../../service/verbs';

const getUserInfo = createAsyncThunk(
  'user/getUserInfo',
  async (params: {category: string}) => {
    const userUrl = `${USERS_URLS.USERS}/${params.id}`;
    const response = await getRequest(params, userUrl);
    console.log(response.data);
    return response.data;
  },
);

export {getUserInfo};
