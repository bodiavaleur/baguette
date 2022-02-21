import React, {useCallback, useEffect, useMemo} from 'react';
import {FlatList} from 'react-native';
import styles from './styles';
import Layout from '~containers/Layout';
import Flashcard from '~components/Flashcard';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import Header from '~components/Header';
import BackButton from '~components/Header/plugins/BackButton';
import {getTrainingDictionary} from '~redux/training/training.selectors';
import {fetchTrainingDictionary} from '~redux/training/training.thunks';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Flashcards: React.FC = () => {
  const route = useRoute();
  const dispatch = useAppDispatch();
  const trainingDictionary = useSelector(getTrainingDictionary);

  const loadDictionary = useCallback(async () => {
    const dictionaryId = route.params?.dictionaryId;

    if (dictionaryId) {
      dispatch(fetchTrainingDictionary(dictionaryId));
    }
  }, [route]);

  useEffect(() => {
    loadDictionary();
  }, []);

  const renderItem = useCallback(
    ({item, index}) => <Flashcard word={item} index={index} />,
    [],
  );

  const screenHeader = useMemo(() => <Header left={<BackButton />} />, []);
  const listData = trainingDictionary?.dictionary ?? [];

  return (
    <Layout withoutPaddings withoutSafeBottom customHeader={screenHeader}>
      <GestureHandlerRootView>
        <FlatList
          style={styles.container}
          scrollEnabled={false}
          contentContainerStyle={styles.content}
          data={listData}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </GestureHandlerRootView>
    </Layout>
  );
};

export default Flashcards;
