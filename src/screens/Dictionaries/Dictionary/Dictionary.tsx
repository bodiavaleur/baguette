import React, {useCallback, useEffect, useMemo} from 'react';
import Layout from '~containers/Layout/Layout';
import WordListItem from '~components/WordListItem';
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';
import {WordRoutes} from '~navigation/routes';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import {useSelector} from 'react-redux';
import {getCurrentDictionary} from '~redux/dictionary/dictionary.selectors';
import {fetchDictionaryById} from '~redux/dictionary/dictionary.thunks';
import ScreenList from '~containers/ScreenList';
import Header from '~components/Header';
import BackButton from '~components/Header/plugins/BackButton';
import {clearCurrentDictionary} from '~redux/dictionary/dictionary.slice';
import DictionaryDetails from '~components/DictionaryDetails';

const Dictionary: React.FC = () => {
  const navigation = useAppNavigation();
  const route = useRoute();
  const {dictionaryId} = route.params;

  const dispatch = useAppDispatch();
  const dictionary = useSelector(getCurrentDictionary);

  const loadDictionary = () => dispatch(fetchDictionaryById(dictionaryId));

  useFocusEffect(
    useCallback(() => {
      loadDictionary();
    }, []),
  );

  useEffect(() => {
    loadDictionary();

    return () => {
      dispatch(clearCurrentDictionary());
    };
  }, []);

  const openWordDetails = (wordId: string) =>
    navigation.navigate(WordRoutes.Root, {
      screen: WordRoutes.Word,
      params: {wordId},
    });

  const renderWord = useCallback(
    ({item}) => (
      <WordListItem word={item} onPress={() => openWordDetails(item._id)} />
    ),
    [],
  );

  const screenHeader = useMemo(() => <Header left={<BackButton />} />, []);

  const data = dictionary?.dictionary ?? [];

  return (
    <Layout withoutPaddings withoutSafeBottom customHeader={screenHeader}>
      <ScreenList
        data={data}
        ListHeaderComponent={DictionaryDetails}
        renderItem={renderWord}
      />
    </Layout>
  );
};

export default Dictionary;
