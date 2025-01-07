import {Linking, Platform} from 'react-native';
import {RequestLocationPermission} from '../../common/request-permission';

const getLocation = async () => {
  const hasPermission = await RequestLocationPermission();

  if (hasPermission === true) {
  }
};

const openAppSettings = () => {
  if (Platform.OS === 'ios') {
    Linking.openURL('app-settings:');
  } else {
    Linking.openSettings();
  }
};

export {getLocation, openAppSettings};
