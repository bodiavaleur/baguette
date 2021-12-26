import {StatusesCollection} from '~types/statuses';
import {Dictionary} from '~types/dictionary';

export interface DictionarySliceState {
  statuses: StatusesCollection;
  dictionary: Dictionary | null;
}
