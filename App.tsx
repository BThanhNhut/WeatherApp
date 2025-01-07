/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, useColorScheme, View} from 'react-native';
import SplashScreen from './src/screens/SplashScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <Text>abc</Text>
      <SplashScreen />
    </SafeAreaView>
  );
}

export default App;
