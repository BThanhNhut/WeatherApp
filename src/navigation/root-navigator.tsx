import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {APP_SCREEN} from './screen-types';
import HomeScreen from '../screens/HomeScreen';

// const RootStack = createNativeStackNavigator({
//   [APP_SCREEN.HOME]: HomeScreen,
// });

// const Navigation = createStaticNavigation(RootStack);
const RootNavigation = () => {
  return <View></View>;
};

export default RootNavigation;

const styles = StyleSheet.create({});
