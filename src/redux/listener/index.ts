export {listenerMiddleware} from '@listener';
import {runWeatherListener} from './weather';

(() => {
  runWeatherListener();
})();
