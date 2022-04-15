import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import {TouchableOpacity, View} from 'react-native-ui-lib';
import CaretIcon from '~assets/icons/caret-right.svg';
import {theme} from '~config/theme';
import {Word} from '~types/word';
import Divider from '~components/Divider';
import Avatar from '~components/Avatar';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import {setCurrentWord} from '~redux/word/word.slice';
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';
import {WordRoutes} from '~navigation/routes';
import Animated, {
  FadeInRight,
  FadeOutLeft,
  Layout,
} from 'react-native-reanimated';
import {LIST_ITEM_ANIMATION_DURATION} from '~components/WordListItem/config';

interface WordListItemProps {
  word: Word;
  index: number;
}

const WordListItem: React.FC<WordListItemProps> = ({word, index}) => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const openWordDetails = () => {
    dispatch(setCurrentWord(word._id));
    navigation.navigate(WordRoutes.Root, {
      screen: WordRoutes.Word,
    });
  };

  return (
    <Animated.View
      entering={FadeInRight.delay(LIST_ITEM_ANIMATION_DURATION * index)}
      exiting={FadeOutLeft}
      layout={Layout}>
      <TouchableOpacity style={styles.container} onPress={openWordDetails}>
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
    </Animated.View>
  );
};

export default WordListItem;
