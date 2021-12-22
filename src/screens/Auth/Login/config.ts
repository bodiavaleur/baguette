import * as Yup from 'yup';

export enum LogInFields {
  Email = 'email',
  Password = 'password',
}

export interface LogInValues {
  [LogInFields.Email]: string;
  [LogInFields.Password]: string;
}

export const initialValues: LogInValues = {
  [LogInFields.Email]: 'Email@example.com',
  [LogInFields.Password]: '123123123',
};

export const validationSchema = Yup.object().shape({
  [LogInFields.Email]: Yup.string().email().trim().required(),
  [LogInFields.Password]: Yup.string().trim().required(),
});
