import React, {useCallback} from 'react';
import Layout from '~containers/Layout/Layout';
import {Text, View} from 'react-native-ui-lib';
import {AuthRoutes} from '~navigation/routes';
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';
import {useFormik} from 'formik';
import {
  initialValues,
  validationSchema,
  LogInFields,
  LogInValues,
} from './config';
import styles from './styles';
import Input from '~components/Input';
import Button from '~components/Button';
import {AuthStrings} from '~config/strings/auth';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import {useLoginMutation} from '~services/api/auth';
import {authenticateUser} from '~redux/auth/auth.slice';

const {Email, Password} = LogInFields;

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const [loginUser] = useLoginMutation();

  const goToRegistration = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{name: AuthRoutes.Registration}],
    });
  }, []);

  const handleSubmit = useCallback(async (values: LogInValues) => {
    await loginUser(values).unwrap();
    dispatch(authenticateUser());
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
    validateOnMount: true,
  });

  const emailError = formik.touched[Email] && formik.errors[Email];
  const passwordError = formik.touched[Password] && formik.errors[Password];

  const isSubmitDisabled = !formik.isValid;

  return (
    <Layout withScroll>
      <Input
        placeholder={AuthStrings.Email}
        keyboardType="email-address"
        value={formik.values[Email]}
        onChangeText={formik.handleChange(Email)}
        error={emailError}
      />
      <Input
        secureTextEntry
        placeholder={AuthStrings.Password}
        value={formik.values[Password]}
        onChangeText={formik.handleChange(Password)}
        error={passwordError}
      />

      <Button
        title={AuthStrings.SignIn}
        onPress={formik.handleSubmit}
        disabled={isSubmitDisabled}
      />

      <View style={styles.toggleAuthContainer}>
        <Text style={styles.toggleAuthText}>{AuthStrings.DontHaveAccount}</Text>
        <Button
          variant="text"
          title={AuthStrings.SignUp}
          onPress={goToRegistration}
        />
      </View>
    </Layout>
  );
};

export default Login;
