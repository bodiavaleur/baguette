import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import {TouchableOpacity, View} from 'react-native-ui-lib';
import CaretIcon from '~assets/icons/caret-right.svg';
import {theme} from '~config/theme';
import {Word} from '~types/word';
import Divider from '~components/Divider';
import Avatar from '~components/Avatar';

interface WordListItemProps {
  word: Word;
  onPress: () => void;
}

const WordListItem: React.FC<WordListItemProps> = ({word, onPress}) => {
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.item}>
          <View style={styles.avatar}>
            <Avatar label={word?.word} src={word?.image} />
          </View>
          <Text style={styles.text}>{word?.word}</Text>
          <View style={styles.icon}>
            <CaretIcon color={theme.colors.primaryGray} />
          </View>
        </View>
      </TouchableOpacity>
      <Divider spacing="none" />
    </>
  );
};

export default WordListItem;
