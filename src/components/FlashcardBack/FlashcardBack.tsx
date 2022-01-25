import React, {useCallback} from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './styles';
import Divider from '~components/Divider';
import Avatar from '~components/Avatar';
import {Word} from '~types/word';

interface FlashcardBackProps {
  word: Word;
}

const FlashcardBack: React.FC<FlashcardBackProps> = ({word}) => {
  const renderTranslations = useCallback(
    ({item, index}) => (
      <>
        <Text style={styles.translation}>
          {index + 1}. {item}
        </Text>
        <Divider spacing="small" />
      </>
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <Avatar
        style={styles.avatar}
        size={76}
        label={word.word}
        src={word.image}
      />
      <Text style={styles.word}>{word.word}</Text>
      <FlatList
        style={styles.translations}
        data={word.translations}
        renderItem={renderTranslations}
      />
      {!!word.example && <Text style={styles.example}>{word.example}</Text>}
    </View>
  );
};

export default FlashcardBack;
