import {Word} from '~types/word';
import {Image} from 'react-native-image-crop-picker';

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