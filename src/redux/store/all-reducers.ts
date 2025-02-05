// import {appReducer} from '@redux-slice/app';
// import {authenticationReducer} from '@redux-slice/authentication';
import {combineReducers} from '@reduxjs/toolkit';
import {appReducer} from '@redux-slice/app';
import {weatherReducer} from '@redux-slice/weather';

export const allReducer = combineReducers({
  app: appReducer,
  weather: weatherReducer,
  //   authentication: authenticationReducer,
});

export type RootState = ReturnType<typeof allReducer>;
