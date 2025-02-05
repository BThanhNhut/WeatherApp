import {createSlice} from '@reduxjs/toolkit';
import {SLICE_NAME} from '../../common/constant';

const initAppState: AppState = {
  loadingApp: false,
};

const appSlice = createSlice({
  initialState: initAppState,
  name: SLICE_NAME.WEATHER,
  reducers: {
    endLoadApp: state => {
      state.loadingApp = false;
    },
  },
});

export const {reducer: appReducer, actions: appActions} = appSlice;
