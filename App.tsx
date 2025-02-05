/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Provider} from 'react-redux';
import {AppContainer} from './src/navigation/app-container';
import {store} from './src/redux/store/store';

import {PortalProvider} from '@gorhom/portal';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PortalProvider>
          <AppContainer />
        </PortalProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
