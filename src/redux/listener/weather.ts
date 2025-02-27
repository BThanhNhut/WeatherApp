import {ApiEndPoint} from '@library/networking/api';
import {validResponse} from '@library/networking/helper';
import {NetWorkService} from '@library/networking/service';
import {takeLatestListeners} from '@listener';
import {IWeatherResponse} from '@model/weather';
import {weatherActions} from '@redux-slice/weather';

export const runWeatherListener = () => {
  takeLatestListeners()({
    actionCreator: weatherActions.fetchCurrentWeather,
    effect: async (action, listenerApi) => {
      const {data, onSuccess} = action.payload;

      const response = await NetWorkService.Get<IWeatherResponse>({
        params: {...data},
        signal: listenerApi.signal,
        url: ApiEndPoint.FETCH_CURRENT_WEATHER,
      });

      if (!response) {
        return;
      }

      if (validResponse(response)) {
        console.log('Làm gì khi api thực hiện thành công', response.data);
        listenerApi.dispatch(weatherActions.setCurrentWeather(response.data));
        onSuccess;
      }
    },
  });
};
