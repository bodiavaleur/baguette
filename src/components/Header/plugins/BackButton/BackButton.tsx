import React from 'react';
import {Button} from 'react-native';
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';

const BackButton: React.FC = () => {
  const navigation = useAppNavigation();

  return <Button title="back" onPress={navigation.goBack} />;
};

export default BackButton;
