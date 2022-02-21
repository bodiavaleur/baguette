import React, {useCallback} from 'react';
import Layout from '~containers/Layout/Layout';
import {Text, TextField, View} from 'react-native-ui-lib';
import {AuthRoutes} from '~navigation/routes';
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';
import {useFormik} from 'formik';
import {
  initialValues,
  validationSchema,
  LogInValues,
  LogInFields,
} from './config';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import {authLogIn} from '~redux/auth/auth.thunks';
import {useSelector} from 'react-redux';
import {getAuthStatuses} from '~redux/auth/auth.selectors';
import {useStatusAlert} from '~hooks/useStatusAlert';
import styles from './styles';
import {fetchMyDictionaries} from '~redux/dictionary/dictionary.thunks';
import {authenticateUser} from '~redux/app/app.slice';
import Input from '~components/Input';
import Button from '~components/Button';
import {AuthStrings} from '~config/strings/auth';

const {Email, Password} = LogInFields;

const Login: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const statuses = useSelector(getAuthStatuses);

  useStatusAlert(statuses[authLogIn.typePrefix], 'Log in failed');

  const goToRegistration = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{name: AuthRoutes.Registration}],
    });
  }, []);

  const handleSubmit = useCallback(async ({email, password}: LogInValues) => {
    await dispatch(authLogIn({email, password})).unwrap();
    await dispatch(fetchMyDictionaries());
    dispatch(authenticateUser());
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const emailError = formik.touched[Email] && formik.errors[Email];
  const passwordError = formik.touched[Password] && formik.errors[Password];

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
      <Button title={AuthStrings.SignIn} onPress={formik.handleSubmit} />

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
