import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import styles from './styles';
import {IOS_DEVICE} from '~config/device';

interface AvoidKeyboardProps {
  children: React.ReactNode;
}

const AvoidKeyboard: React.FC<AvoidKeyboardProps> = ({children}) => {
  const behavior = IOS_DEVICE ? 'padding' : 'height';

  return (
    <KeyboardAvoidingView behavior={behavior} style={styles.container}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default AvoidKeyboard;
