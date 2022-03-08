import {StatusesCollection} from '~types/statuses';
import {Dictionary, DictionaryStats} from '~types/dictionary';
import {Image} from 'react-native-image-crop-picker';

export interface DictionarySliceState {
  statuses: StatusesCollection;
  myDictionaries: Dictionary[];
  currentDictionary: Dictionary | null;
  currentDictionaryStats: DictionaryStats | null;
}

export interface EditDictionaryArgs extends Dictionary {
  dictionaryId: string;
}

export interface UploadDictionaryImageArgs {
  dictionaryId: string;
  image: Image;
}
