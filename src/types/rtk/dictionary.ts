import {Dictionary} from '~types/dictionary';
import {Image} from 'react-native-image-crop-picker';

export interface EditDictionaryArgs extends Dictionary {
  dictionaryId: string;
}

export interface UploadDictionaryImageArgs {
  dictionaryId: string;
  image: Image;
}
