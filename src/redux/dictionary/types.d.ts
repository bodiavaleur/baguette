import {StatusesCollection} from '~types/statuses';
import {Dictionary} from '~types/dictionary';

export interface DictionarySliceState {
  statuses: StatusesCollection;
  myDictionaries: Dictionary[];
  currentDictionary: Dictionary | null;
}

export interface EditDictionaryArgs extends Dictionary {
  dictionaryId: string;
}
