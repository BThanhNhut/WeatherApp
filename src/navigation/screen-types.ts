import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum APP_SCREEN {
  SPLASH = 'SPLASH',
  HOME = 'HOME',
}

export type RootStackParamList = {
  [APP_SCREEN.SPLASH]: undefined;
  [APP_SCREEN.HOME]: undefined;
};

export type StackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList>;
