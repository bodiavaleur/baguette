import * as Yup from 'yup';

export enum NewWordFields {
  Word = 'word',
  Translation = 'translation',
  Example = 'example',
}

export interface NewWordValues {
  [NewWordFields.Word]: string;
  [NewWordFields.Translation]: string;
  [NewWordFields.Example]: string;
}

export const initialValues: NewWordValues = {
  [NewWordFields.Word]: '',
  [NewWordFields.Translation]: '',
  [NewWordFields.Example]: '',
};

export const validationSchema = Yup.object().shape({
  [NewWordFields.Word]: Yup.string().trim().required(),
  [NewWordFields.Translation]: Yup.string().trim().required(),
  [NewWordFields.Example]: Yup.string().trim(),
});
