import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Word} from '~types/word';
import SoundIcon from '~assets/icons/sound.svg';
import {theme} from '~config/theme';
import useTextToSpeech from '~hooks/useTextToSpeech';
import Avatar from '~components/Avatar';

interface FlashcardFrontProps {
  word: Word;
}

const FlashcardFront: React.FC<FlashcardFrontProps> = ({word}) => {
  const tts = useTextToSpeech();

  const speakWord = () => {
    tts.speak(word.word);
  };

  return (
    <View style={styles.container}>
      <Avatar
        style={styles.avatar}
        size={96}
        label={word?.word}
        src={word?.image}
      />
      <Text style={styles.title}>{word.word}</Text>
      <TouchableOpacity style={styles.sound} onPress={speakWord}>
        <SoundIcon width={32} height={32} color={theme.colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default FlashcardFront;
