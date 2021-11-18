import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import {Avatar, TouchableOpacity, View} from 'react-native-ui-lib';
import CaretIcon from '~assets/icons/caret-right.svg';
import {theme} from '~config/theme';

interface WordListItemProps {
  word: any;
}

const WordListItem: React.FC<WordListItemProps> = ({word}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.item}>
        <View style={styles.avatar}>
          <Avatar size={48} label="Me" />
        </View>
        <Text style={styles.text}>word</Text>
        <View style={styles.icon}>
          <CaretIcon color={theme.colors.primaryGray} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WordListItem;
