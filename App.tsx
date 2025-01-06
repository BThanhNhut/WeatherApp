/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, useColorScheme, View} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <View>
        <Text style={{fontFamily: 'Ubuntu-Bold'}}>xin chào</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
