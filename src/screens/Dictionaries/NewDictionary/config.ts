import * as Yup from 'yup';

export enum NewDictionaryFields {
  Name = 'name',
  Description = 'description',
  Image = 'image',
}

export interface NewDictionaryValues {
  [NewDictionaryFields.Name]: string;
  [NewDictionaryFields.Description]: string;
  [NewDictionaryFields.Image]: string;
}

export const initialValues: NewDictionaryValues = {
  [NewDictionaryFields.Name]: '',
  [NewDictionaryFields.Description]: '',
  [NewDictionaryFields.Image]: '',
};

export const validationSchema = Yup.object().shape({
  [NewDictionaryFields.Name]: Yup.string().trim().required(),
  [NewDictionaryFields.Description]: Yup.string().trim().required(),
  [NewDictionaryFields.Image]: Yup.string().trim(),
});
