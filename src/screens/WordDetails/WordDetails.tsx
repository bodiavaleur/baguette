import React, {useCallback, useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Layout from '~containers/Layout';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import Header from '~components/Header';
import BackButton from '~components/Header/plugins/BackButton';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import {useSelector} from 'react-redux';
import {getCurrentWord} from '~redux/word/word.selectors';
import {fetchWordById} from '~redux/word/word.thunks';
import {clearCurrentWord} from '~redux/word/word.slice';
import useTextToSpeech from '~hooks/useTextToSpeech';

const WordDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const route = useRoute();
  const currentWord = useSelector(getCurrentWord);
  const tts = useTextToSpeech();
  const {wordId} = route.params;

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchWordById({wordId}));

      return () => {
        dispatch(clearCurrentWord());
      };
    }, [wordId]),
  );

  useEffect(() => {
    tts.speak(currentWord?.word);
  }, [currentWord]);

  const header = <Header left={<BackButton />} />;

  return (
    <Layout style={styles.container} customHeader={header}>
      <Text style={styles.word}>{currentWord?.word}</Text>
      <Text style={styles.translation}>{currentWord?.translation}</Text>
      <Text style={styles.example}>{currentWord?.example}</Text>
    </Layout>
  );
};

export default WordDetails;
