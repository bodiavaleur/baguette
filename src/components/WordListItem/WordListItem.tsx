import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import {Avatar, TouchableOpacity, View} from 'react-native-ui-lib';
import CaretIcon from '~assets/icons/caret-right.svg';
import {theme} from '~config/theme';

interface WordListItemProps {
  word: string;
  onPress: () => void;
}

const WordListItem: React.FC<WordListItemProps> = ({word, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.item}>
        <View style={styles.avatar}>
          <Avatar size={48} label={word.charAt(0)} />
        </View>
        <Text style={styles.text}>{word}</Text>
        <View style={styles.icon}>
          <CaretIcon color={theme.colors.primaryGray} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WordListItem;
