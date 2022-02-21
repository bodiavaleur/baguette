import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import ActionIcon from '~components/ActionIcon';
import SoundIcon from '~assets/icons/sound.svg';
import Divider from '~components/Divider';
import {Word} from '~types/word';
import useTextToSpeech from '~hooks/useTextToSpeech';
import Avatar from '~components/Avatar';

interface WordDetailsFrameProps {
  word: Word;
}

const WordDetailsFrame: React.FC<WordDetailsFrameProps> = ({word}) => {
  const tts = useTextToSpeech();

  const speakWord = () => {
    tts.speak(word?.word);
  };

  const showTranslations = useMemo(
    () =>
      word?.translations?.map((translation: string, index) => {
        const numOfTranslation = `${index + 1}. `;
        return (
          <>
            <Text style={styles.translation}>
              {numOfTranslation} {translation}
            </Text>
            <Divider />
          </>
        );
      }),
    [word],
  );

  return (
    <View style={styles.container}>
      <Avatar
        style={styles.avatar}
        size={128}
        label={word?.word}
        src={word?.image}
      />
      <View style={styles.heading}>
        <ActionIcon
          style={styles.soundIcon}
          icon={SoundIcon}
          onPress={speakWord}
        />
        <Text style={styles.word}>{word?.word}</Text>
      </View>
      <Divider />
      {showTranslations}
      {!!word?.example && <Text style={styles.example}>{word?.example}</Text>}
    </View>
  );
};

export default WordDetailsFrame;
