import React, {useCallback, useMemo} from 'react';
import {FlatList} from 'react-native';
import styles from './styles';
import Layout from '~containers/Layout';
import Flashcard from '~components/Flashcard';
import {useSelector} from 'react-redux';
import Header from '~components/Header';
import BackButton from '~components/Header/plugins/BackButton';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {trainingApi} from '~services/api/training';
import useInfinityScroll from '~hooks/useInfinityScroll';
import {selectTrainingDictionary} from '~redux/training/training.selectors';

const {getTrainingDictionary} = trainingApi.endpoints;

const Flashcards: React.FC = () => {
  const trainingDictionary = useSelector(selectTrainingDictionary);
  const trainingWords = useInfinityScroll(getTrainingDictionary, {
    dictionaryId: trainingDictionary,
  });

  const renderItem = useCallback(
    ({item, index}) => <Flashcard word={item} index={index} />,
    [],
  );

  const screenHeader = useMemo(() => <Header left={<BackButton />} />, []);

  return (
    <Layout withoutPaddings customHeader={screenHeader}>
      <GestureHandlerRootView>
        <FlatList
          style={styles.container}
          scrollEnabled={false}
          contentContainerStyle={styles.content}
          data={trainingWords.dataset}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </GestureHandlerRootView>
    </Layout>
  );
};

export default Flashcards;
