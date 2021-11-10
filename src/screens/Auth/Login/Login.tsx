import React from 'react';
import styles from './styles';
import Layout from '~containers/Layout/Layout';
import {Button, TextField, View} from 'react-native-ui-lib';

const Login: React.FC = ({}) => {
  return (
    <Layout>
      <View>
        <TextField keyboardType="email-address" placeholder="Login" />
        <TextField secureTextEntry placeholder="Password" />
        <Button white label="Login" />
      </View>
    </Layout>
  );
};

export default Login;
