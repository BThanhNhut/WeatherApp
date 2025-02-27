import {SLICE_NAME} from '@common/constant';
import {ActionType} from '@model/index';
import {ICoord, IWeatherResponse, IWeatherState} from '@model/weather';
import * as Action from '@redux-action-type/weather';
import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialWeatherState: IWeatherState = {
  currentWeather: null,
};

const weatherSlice = createSlice({
  initialState: initialWeatherState,
  name: SLICE_NAME.WEATHER,
  reducers: {
    setCurrentWeather: (state, {payload}: PayloadAction<IWeatherResponse>) => {
      state.currentWeather = payload;
    },
  },
});

const fetchCurrentWeather = createAction(
  Action.FETCHCURRENTWEATHER,
  (payload: ActionType<ICoord, IWeatherResponse>) => {
    return {
      payload,
    };
  },
);

export const weatherActions = {...weatherSlice.actions, fetchCurrentWeather};
export const weatherReducer = weatherSlice.reducer;
