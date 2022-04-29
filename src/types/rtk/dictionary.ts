import {Dictionary} from '~types/dictionary';
import {Image} from 'react-native-image-crop-picker';
import {PaginationQuery} from '~types/pagination';
import {LanguageQuery} from '~types/language';

export interface DictionaryIdArg {
  dictionaryId: string;
}

export type GetMyDictionariesArgs = PaginationQuery & LanguageQuery;

export type EditDictionaryArgs = Dictionary & DictionaryIdArg;

export type UploadDictionaryImageArgs = DictionaryIdArg & {
  image: Image;
};

export type GetDictionaryWordsArgs = DictionaryIdArg & PaginationQuery;
