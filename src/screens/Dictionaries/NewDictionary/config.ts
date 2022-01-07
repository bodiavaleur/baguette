import * as Yup from 'yup';

export enum NewDictionaryFields {
  Name = 'name',
  Description = 'description',
}

export interface NewDictionaryValues {
  [NewDictionaryFields.Name]: string;
  [NewDictionaryFields.Description]: string;
}

export const initialValues: NewDictionaryValues = {
  [NewDictionaryFields.Name]: '',
  [NewDictionaryFields.Description]: '',
};

export const validationSchema = Yup.object().shape({
  [NewDictionaryFields.Name]: Yup.string().trim().required(),
  [NewDictionaryFields.Description]: Yup.string().trim().required(),
});
