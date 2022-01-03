import * as Yup from 'yup';

export enum NewWordFields {
  DictionaryId = 'dictionaryId',
  Word = 'word',
  Translation = 'translation',
  Example = 'example',
}

export interface NewWordValues {
  [NewWordFields.DictionaryId]: string;
  [NewWordFields.Word]: string;
  [NewWordFields.Translation]: string;
  [NewWordFields.Example]: string;
}

export const initialValues: NewWordValues = {
  [NewWordFields.DictionaryId]: '',
  [NewWordFields.Word]: '',
  [NewWordFields.Translation]: '',
  [NewWordFields.Example]: '',
};

export const validationSchema = Yup.object().shape({
  [NewWordFields.DictionaryId]: Yup.string().trim().required(),
  [NewWordFields.Word]: Yup.string().trim().required(),
  [NewWordFields.Translation]: Yup.string().trim().required(),
  [NewWordFields.Example]: Yup.string().trim(),
});
