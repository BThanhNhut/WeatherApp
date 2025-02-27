import {RootState} from '@redux/store/all-reducers';
import {createSelector} from '@reduxjs/toolkit';

export const selectCurrentWeather = createSelector(
  (state: RootState) => state,
  state => state.weather,
);
