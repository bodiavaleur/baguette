import {StatusesCollection} from '~types/statuses';
import {Word} from '~types/word';

export interface WordSliceState {
  statuses: StatusesCollection;
  currentWord: Word | null;
}

export interface FetchWordArgs {
  wordId: string;
}
