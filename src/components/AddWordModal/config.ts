import * as Yup from 'yup';

export enum NewWordFields {
  DictionaryId = 'dictionaryId',
  Word = 'word',
  Example = 'example',
}

export interface NewWordValues {
  [NewWordFields.DictionaryId]: string;
  [NewWordFields.Word]: string;
  [NewWordFields.Example]: string;
}

export const initialValues: NewWordValues = {
  [NewWordFields.DictionaryId]: '',
  [NewWordFields.Word]: '',
  [NewWordFields.Example]: '',
};

export const validationSchema = Yup.object().shape({
  [NewWordFields.DictionaryId]: Yup.string().trim().required(),
  [NewWordFields.Word]: Yup.string().trim().required(),
  [NewWordFields.Example]: Yup.string().trim(),
});
