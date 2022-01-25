import React, {useCallback, useEffect, useMemo} from 'react';
import {FlatList} from 'react-native';
import styles from './styles';
import Layout from '~containers/Layout';
import Flashcard from '~components/Flashcard';
import {useRoute} from '@react-navigation/native';
import {
  fetchDictionaryById,
  fetchMyDictionaries,
} from '~redux/dictionary/dictionary.thunks';
import {useSelector} from 'react-redux';
import {getCurrentDictionary} from '~redux/dictionary/dictionary.selectors';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import Header from '~components/Header';
import BackButton from '~components/Header/plugins/BackButton';

const Flashcards: React.FC = () => {
  const route = useRoute();
  const dispatch = useAppDispatch();
  const dictionary = useSelector(getCurrentDictionary);

  const loadDictionary = useCallback(async () => {
    const dictionaryId = route.params?.dictionaryId;

    if (dictionaryId) {
      dispatch(fetchDictionaryById(dictionaryId));
    } else {
      const dictionaries = await dispatch(fetchMyDictionaries()).unwrap();
      dispatch(fetchDictionaryById(dictionaries[0]._id));
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

  return (
    <Layout withoutPaddings withoutSafeBottom customHeader={screenHeader}>
      <FlatList
        style={styles.container}
        scrollEnabled={false}
        contentContainerStyle={styles.content}
        data={dictionary?.dictionary ?? []}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </Layout>
  );
};

export default Flashcards;
