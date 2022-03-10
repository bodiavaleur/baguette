import React, {useCallback, useEffect, useMemo} from 'react';
import Layout from '~containers/Layout/Layout';
import WordListItem from '~components/WordListItem';
import {useFocusEffect} from '@react-navigation/native';
import ScreenList from '~containers/ScreenList';
import Header from '~components/Header';
import BackButton from '~components/Header/plugins/BackButton';
import DictionaryDetails from '~components/DictionaryDetails';
import {useGetDictionaryByIdQuery} from '~services/api/dictionary';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import {clearCurrentDictionary} from '~redux/dictionary/dictionary.slice';
import {useSelector} from 'react-redux';
import {selectCurrentDictionary} from '~redux/dictionary/dictionary.selectors';

const Dictionary: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentDictionary = useSelector(selectCurrentDictionary);
  const dictionaryById = useGetDictionaryByIdQuery(currentDictionary);

  useEffect(() => {
    return () => {
      dispatch(clearCurrentDictionary());
    };
  }, []);

  useFocusEffect(
    useCallback(() => {
      dictionaryById.refetch();
    }, []),
  );

  const renderWord = useCallback(({item}) => <WordListItem word={item} />, []);

  const screenHeader = useMemo(() => <Header left={<BackButton />} />, []);

  const data = dictionaryById.data?.dictionary ?? [];

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
