import AsyncStorage from '@react-native-async-storage/async-storage';
import {TokenStorage} from '~types/token';
import {WordType} from '~config/words';
import {Language} from '~config/language';

function makeStorage<T>(key: string) {
  return {
    get: async () => {
      const item = await AsyncStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    },
    set: async (value: T) =>
      await AsyncStorage.setItem(key, JSON.stringify(value)),
    clear: async () => await AsyncStorage.removeItem(key),
  };
}

export const storage = {
  token: makeStorage<TokenStorage>('token'),
  language: makeStorage<Language>('language'),
  lastUsedDictionary: makeStorage<string>('lastUsedDictionary'),
  lastUsedWordType: makeStorage<WordType>('lastUsedWordType'),
  trainingDictionary: makeStorage<string>('trainingDictionary'),
};
