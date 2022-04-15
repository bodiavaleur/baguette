import {WordType} from '~config/words';
import {Item} from 'react-native-picker-select';

export const getWordTypeOptions: () => Item[] = () =>
  Object.entries(WordType).map(entry => {
    const [key, value] = entry;

    return {label: key, value};
  });
