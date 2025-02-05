import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {weatherActions} from '@redux-slice/weather';
// import {weatherActions} from '@redux-slice';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(
      weatherActions.fetchCurrentWeather('abc', () => {
        console.log('goi dispatch');
      }),
    );
  };

  // useEffect(() => {
  //   console.log('Vao dc useffect');
  //   dispatch(
  //     weatherActions.fetchCurrentWeather('abc', () => {
  //       console.log('goi dispatch');
  //     }),
  //   );
  // }, []);

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={handleLogin}
        style={{width: 100, height: 100, backgroundColor: 'red'}}
      />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
