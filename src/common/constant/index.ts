import {Platform} from 'react-native';

export const API_CONFIG = {
  CODE_DEFAULT: -200,
  CODE_SUCCESS: 200,
  CODE_TIME_OUT: 408,
  ERROR_NETWORK_CODE: -100,
  RESULT_CODE_PUSH_OUT: 401,
  STATUS_TIME_OUT: 'ECONNABORTED',
  TIME_OUT: 10 * 1000,
};

export const API_URL = 'https://api.openweathermap.org';

export const SLICE_NAME = {
  WEATHER: 'WEATHER_',
  AIR: 'AIR_',
  LOCATION: 'LOCATION_',
};

export const isIOS = Platform.OS === 'ios';
