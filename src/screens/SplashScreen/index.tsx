import React, {useEffect} from 'react';
import {
  Alert,
  BackHandler,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import GetLocation from 'react-native-get-location';
import {RESULTS} from 'react-native-permissions';
import {useLocationPermission} from '@common/request-permission';
import {replaceScreen} from '../../navigation/navigation-service';
import {APP_SCREEN} from '../../navigation/screen-types';
import {openAppSettings} from './utils';

const SplashScreen = () => {
  useEffect(() => {
    const getLocation = async () => {
      const permission = await useLocationPermission();
      if (permission === RESULTS.GRANTED) {
        GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 60000,
        })
          .then(location => {
            console.log('Vi tri la', location);
            setTimeout(() => {
              replaceScreen(APP_SCREEN.HOME);
            }, 1000);
          })
          .catch(err => {
            console.log('Loi la', err);
          });
      } else if (permission === RESULTS.BLOCKED) {
        Alert.alert(
          'Quyền bị chặn',
          'Bạn chặn quyền truy cập vị trí, vui lòng vào cài đặt để cấp quyền.',
          [
            {text: 'Cấp quyền', onPress: openAppSettings},
            {text: 'Thoát', onPress: () => BackHandler.exitApp()},
          ],
        );
      } else {
        Alert.alert(
          'Quyền bị từ chối',
          'Bạn chặn quyền truy cập vị trí, vui lòng vào cài đặt để cấp quyền.',
          [
            {text: 'Cấp quyền', onPress: openAppSettings},
            {text: 'Thoát', onPress: () => BackHandler.exitApp()},
          ],
        );
      }
    };
    getLocation();
  }, []);

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={styles.container}
        source={require('@assets/splash.png')}></ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
