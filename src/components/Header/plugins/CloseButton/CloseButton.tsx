import React from 'react';
import styles from './styles';
import {Text} from 'react-native';

interface CloseButtonProps {
  onClose: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({onClose}) => {
  return <Text>close</Text>;
};

export default CloseButton;
