import {Platform} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

export const RequestLocationPermission = async () => {
  const permission =
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

  const result = await check(permission);

  switch (result) {
    case RESULTS.GRANTED:
      return true; // Quyền đã được cấp
    case RESULTS.DENIED:
      // Người dùng đã từ chối quyền
      const requestResult = await request(permission);
      return requestResult === RESULTS.GRANTED; // Kiểm tra lại sau khi yêu cầu
    case RESULTS.BLOCKED:
      return 'blocked'; // Quyền bị chặn
    default:
      return false; // Trường hợp khác
  }
};
