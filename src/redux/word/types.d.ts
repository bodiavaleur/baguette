import {StatusesCollection} from '~types/statuses';
import {Word} from '~types/word';
import {RootState} from '~redux/index';

export interface WordSliceState {
  statuses: StatusesCollection;
  currentWord: Word | null;
}

export interface FetchWordArgs {
  wordId: string;
}

export interface NewWordArgs extends Partial<Word> {
  dictionaryId: string;
}

export interface ThunkState {
  state: RootState;
}
