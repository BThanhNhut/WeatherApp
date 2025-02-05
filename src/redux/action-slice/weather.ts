import {createAction, createSlice} from '@reduxjs/toolkit';
import {IWeatherState} from '@model/weather';
import {SLICE_NAME} from '@common/constant';
import * as Action from '@redux-action-type/weather';

const initialWeatherState: IWeatherState = {
  currentWeather: null,
};

const weatherSlice = createSlice({
  initialState: initialWeatherState,
  name: SLICE_NAME.WEATHER,
  reducers: {},
});

const fetchCurrentWeather = createAction(
  Action.FETCHCURRENTWEATHER,
  (body: any, onSucceeded: () => void) => {
    console.log('vao dc action');
    return {
      payload: {
        body,
        onSucceeded,
      },
    };
  },
);

export const weatherActions = {...weatherSlice.actions, fetchCurrentWeather};
export const weatherReducer = weatherSlice.reducer;
