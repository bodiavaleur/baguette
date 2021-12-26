import React, {useCallback} from 'react';
import {
  initialValues,
  validationSchema,
  RegistrationFields,
  RegistrationValues,
} from './config';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';
import {useSelector} from 'react-redux';
import {getAuthStatuses} from '~redux/auth/auth.selectors';
import {useStatusAlert} from '~hooks/useStatusAlert';
import {authRegister} from '~redux/auth/auth.thunks';
import {AuthRoutes, DashboardRoutes} from '~navigation/routes';
import {useFormik} from 'formik';
import Layout from '~containers/Layout';
import {Button, TextField, Text, View} from 'react-native-ui-lib';
import styles from './styles';
import {fetchUserDictionary} from '~redux/dictionary/dictionary.thunks';

const {Username, Email, Password} = RegistrationFields;

const Registration: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const statuses = useSelector(getAuthStatuses);

  useStatusAlert(statuses[authRegister.typePrefix], 'Registration failed');

  const goToLogin = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{name: AuthRoutes.Login}],
    });
  }, []);

  const handleSubmit = useCallback(async (values: RegistrationValues) => {
    await dispatch(authRegister(values)).unwrap();
    await dispatch(fetchUserDictionary());

    navigation.navigate(DashboardRoutes.Root);
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
      <TextField
        floatingPlaceholder
        placeholder="Username"
        onChangeText={formik.handleChange(Username)}
        error={usernameError}
      />
      <TextField
        floatingPlaceholder
        placeholder="Login"
        keyboardType="email-address"
        onChangeText={formik.handleChange(Email)}
        error={emailError}
      />
      <TextField
        floatingPlaceholder
        secureTextEntry
        placeholder="Password"
        onChangeText={formik.handleChange(Password)}
        error={passwordError}
      />
      <Button white label="Create account" onPress={formik.handleSubmit} />
      <View style={styles.toggleAuthContainer}>
        <Text style={styles.toggleAuthText}>Don't have an account?</Text>
        <Button link label="Sign up" onPress={goToLogin} />
      </View>
    </Layout>
  );
};

export default Registration;
