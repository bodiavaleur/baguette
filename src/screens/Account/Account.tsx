import React from 'react';
import Layout from '~containers/Layout';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import {authLogout} from '~redux/auth/auth.thunks';
import Button from '~components/Button';

const Account: React.FC = () => {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(authLogout());
  };

  return (
    <Layout>
      <Button title="Logout" onPress={onLogout} />
    </Layout>
  );
};

export default Account;
