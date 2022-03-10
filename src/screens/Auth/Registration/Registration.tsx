import React, {useCallback} from 'react';
import {
  initialValues,
  validationSchema,
  RegistrationFields,
  RegistrationValues,
} from './config';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';
import {AuthRoutes} from '~navigation/routes';
import {useFormik} from 'formik';
import Layout from '~containers/Layout';
import {Text, View} from 'react-native-ui-lib';
import styles from './styles';
import {AuthStrings} from '~config/strings/auth';
import Input from '~components/Input';
import Button from '~components/Button';
import {useRegisterMutation} from '~services/api/auth';
import {authenticateUser} from '~redux/auth/auth.slice';

const {Username, Email, Password} = RegistrationFields;

const Registration: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const [registerUser] = useRegisterMutation();

  const goToLogin = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{name: AuthRoutes.Login}],
    });
  }, []);

  const handleSubmit = useCallback(async (values: RegistrationValues) => {
    await registerUser(values).unwrap();
    dispatch(authenticateUser());
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const usernameError = formik.touched[Username] && formik.errors[Username];
  const emailError = formik.touched[Email] && formik.errors[Email];
  const passwordError = formik.touched[Password] && formik.errors[Password];

  return (
    <Layout withScroll>
      <Input
        placeholder={AuthStrings.Username}
        onChangeText={formik.handleChange(Username)}
        error={usernameError}
      />
      <Input
        placeholder={AuthStrings.Email}
        keyboardType="email-address"
        onChangeText={formik.handleChange(Email)}
        error={emailError}
      />
      <Input
        secureTextEntry
        placeholder={AuthStrings.Password}
        onChangeText={formik.handleChange(Password)}
        error={passwordError}
      />

      <Button title={AuthStrings.CreateAccount} onPress={formik.handleSubmit} />
      <View style={styles.toggleAuthContainer}>
        <Text style={styles.toggleAuthText}>
          {AuthStrings.AlreadyHaveAccount}
        </Text>
        <Button variant="text" title={AuthStrings.SignIn} onPress={goToLogin} />
      </View>
    </Layout>
  );
};

export default Registration;
