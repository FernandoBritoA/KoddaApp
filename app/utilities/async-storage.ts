import AsyncStorage from '@react-native-async-storage/async-storage';
import {showErrorToast} from './toast';

type StorageKey = '@available_sessions' | '@current_session';

export const getStorageItem = async <T>(storageKey: StorageKey): Promise<T | null> => {
  try {
    const value = await AsyncStorage.getItem(storageKey);

    return value ? JSON.parse(value) : null;
  } catch (e) {
    showErrorToast("Couldn't retrieve stored data");

    return {} as T;
  }
};

export const setStorageItem = async <T>(key: StorageKey, value: T): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    showErrorToast("Couldn't save data");
  }
};
