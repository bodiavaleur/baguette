import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Layout from '~containers/Layout';
import Tts from 'react-native-tts';
import {useRoute} from '@react-navigation/native';
import Header from '~components/Header';
import BackButton from '~components/Header/plugins/BackButton';

interface WordDetailsProps {}

const WordDetails: React.FC<WordDetailsProps> = ({}) => {
  const route = useRoute();
  const {word} = route.params;

  useEffect(() => {
    Tts.speak(word, {
      iosVoiceId: 'com.apple.ttsbundle.Thomas-compact',
      rate: 0.5,
      androidParams: {
        KEY_PARAM_PAN: -1,
        KEY_PARAM_VOLUME: 0.5,
        KEY_PARAM_STREAM: 'STREAM_MUSIC',
      },
    });
  }, [word]);

  const header = <Header left={<BackButton />} />;

  return (
    <Layout customHeader={header}>
      <Text>word</Text>
    </Layout>
  );
};

export default WordDetails;
