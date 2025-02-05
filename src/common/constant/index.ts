import {Platform} from 'react-native';

export const API_CONFIG = {
  CODE_SUCCESS: 200,
};

export const SLICE_NAME = {
  WEATHER: 'WEATHER_',
  AIR: 'AIR_',
  LOCATION: 'LOCATION_',
};

export const isIOS = Platform.OS === 'ios';
