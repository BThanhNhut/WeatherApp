import {Linking, Platform} from 'react-native';

const getLocation = async () => {};

const openAppSettings = () => {
  if (Platform.OS === 'ios') {
    Linking.openURL('app-settings:');
  } else {
    Linking.openSettings();
  }
};

export {getLocation, openAppSettings};
