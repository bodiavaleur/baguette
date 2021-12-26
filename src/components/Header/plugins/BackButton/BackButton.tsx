import React from 'react';
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';
import ActionIcon from '~components/ActionIcon';
import CaretLeftIcon from '~assets/icons/caret-left.svg';

const BackButton: React.FC = () => {
  const navigation = useAppNavigation();

  return <ActionIcon icon={CaretLeftIcon} onPress={navigation.goBack} />;
};

export default BackButton;
