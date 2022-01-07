import React from 'react';
import {Text} from 'react-native';
import Layout from '~containers/Layout';
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';
import {AuthRoutes} from '~navigation/routes';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import {authLogout} from '~redux/auth/auth.thunks';
import Button from '~components/Button';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  const onLogout = async () => {
    await dispatch(authLogout());
    navigation.reset({
      index: 1,
      routes: [{name: AuthRoutes.Root}],
    });
  };

  return (
    <Layout>
      <Text>asd</Text>
      <Button title="Logout" onPress={onLogout} />
    </Layout>
  );
};

export default Home;
