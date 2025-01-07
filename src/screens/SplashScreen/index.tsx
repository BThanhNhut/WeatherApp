import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GetLocation from 'react-native-get-location';
import {RequestLocationPermission} from '../../common/request-permission';

const SplashScreen = () => {
  console.log('ket qua la1');
  console.log('ket qua la2');

  useEffect(() => {
    const getLocation = async () => {
      // const hasPermission = await RequestLocationPermission();
      // if (hasPermission) {
      //   console.log('Đã có quyền');
      // }
    };
    getLocation();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text>{`CHI TIẾT LÀ`}</Text>
      <Text>{`CHI TIẾT LÀ`}</Text>
      <Text>{`CHI TIẾT LÀ`}</Text>
      <Text>{`CHI TIẾT LÀ`}</Text>
      <Text>{`CHI TIẾT LÀ`}</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
