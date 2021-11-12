import React from 'react';
import styles from './styles';
import Layout from '~containers/Layout/Layout';
import {Button, TextField, View} from 'react-native-ui-lib';
import {DashboardRoutes} from '~navigation/routes';
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';

const Login: React.FC = ({}) => {
  const navigation = useAppNavigation();

  const navigateToDashboard = () => {
    navigation.navigate(DashboardRoutes.Root);
  };

  return (
    <Layout>
      <View>
        <TextField keyboardType="email-address" placeholder="Login" />
        <TextField secureTextEntry placeholder="Password" />
        <Button white label="Login" onPress={navigateToDashboard} />
      </View>
    </Layout>
  );
};

export default Login;
