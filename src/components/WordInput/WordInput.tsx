import React from 'react';
import {TextInputProps} from 'react-native';
import styles from './styles';
import {TextInput} from 'react-native';

interface WordInputProps extends TextInputProps {}

const WordInput: React.FC<WordInputProps> = props => {
  return <TextInput style={styles.container} returnKeyType="done" {...props} />;
};

export default WordInput;
