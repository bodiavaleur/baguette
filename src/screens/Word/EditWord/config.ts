import * as Yup from 'yup';
import {Word} from '~types/word';

export enum EditWordFields {
  Word = 'word',
  Example = 'example',
}

export interface EditWordValues {
  [EditWordFields.Word]: string;
  [EditWordFields.Example]: string;
}

export const initialValues = (word: Word) => ({
  [EditWordFields.Word]: word?.[EditWordFields.Word] ?? '',
  [EditWordFields.Example]: word?.[EditWordFields.Example] ?? '',
});

export const validationSchema = Yup.object().shape({
  [EditWordFields.Word]: Yup.string().trim().required(),
  [EditWordFields.Example]: Yup.string().trim(),
});
