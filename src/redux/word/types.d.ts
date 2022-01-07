import {StatusesCollection} from '~types/statuses';
import {Word} from '~types/word';
import {RootState} from '~redux/index';
import {Image} from 'react-native-image-crop-picker';

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

export interface EditWordArgs extends Partial<Word> {
  wordId: string;
}

export interface UploadWordImageArgs {
  wordId: string;
  image: Image;
}

export interface ThunkState {
  state: RootState;
}
