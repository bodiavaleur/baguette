import * as Yup from 'yup';

export enum RegistrationFields {
  Email = 'email',
  Password = 'password',
  Username = 'username',
}

export interface RegistrationValues {
  [RegistrationFields.Username]: string;
  [RegistrationFields.Email]: string;
  [RegistrationFields.Password]: string;
}

export const initialValues: RegistrationValues = {
  [RegistrationFields.Username]: '',
  [RegistrationFields.Email]: '',
  [RegistrationFields.Password]: '',
};

export const validationSchema = Yup.object().shape({
  [RegistrationFields.Username]: Yup.string().trim().required(),
  [RegistrationFields.Email]: Yup.string().email().trim().required(),
  [RegistrationFields.Password]: Yup.string().trim().required(),
});
