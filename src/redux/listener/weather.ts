import {takeLatestListeners} from '@listener';
import {weatherActions} from '@redux-slice/weather';

export const runWeatherListener = () => {
  console.log('Vao dc listener ==== ==== ==== ==== ==== ====');
  takeLatestListeners()({
    actionCreator: weatherActions.fetchCurrentWeather,
    effect: async (action, listenerApi) => {
      const {body, onSucceeded} = action.payload;
      const response = 0;
      if (!response) {
        return;
      }
    },
  });
};
