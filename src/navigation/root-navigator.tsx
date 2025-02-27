import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {APP_SCREEN} from './screen-types';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import {navigationRef} from './navigation-service';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Tạo Native Stack Navigator
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name={APP_SCREEN.HOME} component={HomeScreen} />
    </Drawer.Navigator>
  );
};

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={APP_SCREEN.SPLASH}
        screenOptions={{
          freezeOnBlur: true,
          navigationBarColor: '#fff',
          statusBarTranslucent: true,
          headerShown: false,
        }}>
        <Stack.Screen
          name={APP_SCREEN.SPLASH}
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name={APP_SCREEN.DRAWER} component={HomeDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
