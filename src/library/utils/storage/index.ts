import {MMKV} from 'react-native-mmkv';
import {promise} from 'zod';

export const AppStorage = new MMKV();

export function loadString(key: string) {
  try {
    return AppStorage.getString(key);
  } catch (error) {
    return undefined;
  }
}

export function save(key: string, value: any) {
  try {
    AppStorage.set(key, JSON.stringify(value));
    return true;
  } catch (error) {
    return false;
  }
}

export async function remove(key: string) {
  try {
    AppStorage.delete(key);
  } catch (error) {}
}

interface Storage {
  getItem(key: string, ...args: Array<any>): any;
  setItem(key: string, value: any, ...rgs: Array<any>): any;
  removeItem(key: string, ...args: Array<any>): any;
}

export const reduxPersistStorage: Storage = {
  getItem: key => {
    const value = AppStorage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    AppStorage.delete(key);
    return Promise.resolve();
  },
  setItem: (key, value) => {
    AppStorage.set(key, value);
    return Promise.resolve(true);
  },
};
