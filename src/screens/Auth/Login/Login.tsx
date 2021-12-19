import React, {useCallback} from 'react';
import Layout from '~containers/Layout/Layout';
import {Button, Text, TextField, View} from 'react-native-ui-lib';
import {AuthRoutes, DashboardRoutes} from '~navigation/routes';
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';
import {useFormik} from 'formik';
import {
  initialValues,
  validationSchema,
  LogInValues,
  LogInFields,
} from './config';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import {authLogIn} from '~redux/auth/thunks';
import {useSelector} from 'react-redux';
import {getAuthStatuses} from '~redux/auth/selectors';
import {useStatusAlert} from '~hooks/useStatusAlert';
import styles from './styles';

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
    const user = await dispatch(authLogIn({email, password})).unwrap();

    console.log('[*] user: ', user);

    navigation.navigate(DashboardRoutes.Root);
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
      <TextField
        floatingPlaceholder
        placeholder="Email"
        keyboardType="email-address"
        value={formik.values[Email]}
        onChangeText={formik.handleChange(Email)}
        error={emailError}
      />
      <TextField
        floatingPlaceholder
        secureTextEntry
        placeholder="Password"
        value={formik.values[Password]}
        onChangeText={formik.handleChange(Password)}
        error={passwordError}
      />
      <Button white label="Login" onPress={formik.handleSubmit} />

      <View style={styles.toggleAuthContainer}>
        <Text style={styles.toggleAuthText}>Don't have an account?</Text>
        <Button link label="Sign up" onPress={goToRegistration} />
      </View>
    </Layout>
  );
};

export default Login;
