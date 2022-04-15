import * as Yup from 'yup';
import {WordType} from '~config/words';

export enum NewWordFields {
  DictionaryId = 'dictionaryId',
  Word = 'word',
  Example = 'example',
  Type = 'wordType',
}

export interface NewWordValues {
  [NewWordFields.DictionaryId]: string;
  [NewWordFields.Word]: string;
  [NewWordFields.Example]: string;
  [NewWordFields.Type]: WordType | '';
}

export const initialValues: NewWordValues = {
  [NewWordFields.DictionaryId]: '',
  [NewWordFields.Word]: '',
  [NewWordFields.Example]: '',
  [NewWordFields.Type]: '',
};

export const validationSchema = Yup.object().shape({
  [NewWordFields.DictionaryId]: Yup.string().trim().required(),
  [NewWordFields.Word]: Yup.string().trim().required(),
  [NewWordFields.Example]: Yup.string().trim(),
});
