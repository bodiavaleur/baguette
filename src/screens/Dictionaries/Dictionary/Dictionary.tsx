import React, {useCallback, useEffect, useMemo} from 'react';
import Layout from '~containers/Layout/Layout';
import WordListItem from '~components/WordListItem';
import ScreenList from '~containers/ScreenList';
import Header from '~components/Header';
import BackButton from '~components/Header/plugins/BackButton';
import DictionaryDetails from '~components/DictionaryDetails';
import dictionaryApi from '~services/api/dictionary';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import {clearCurrentDictionary} from '~redux/dictionary/dictionary.slice';
import {useSelector} from 'react-redux';
import {selectCurrentDictionary} from '~redux/dictionary/dictionary.selectors';
import useInfinityScroll from '~hooks/useInfinityScroll';

const {getDictionaryWords} = dictionaryApi.endpoints;

const Dictionary: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentDictionary = useSelector(selectCurrentDictionary);
  const words = useInfinityScroll(getDictionaryWords, {
    dictionaryId: currentDictionary,
  });

  useEffect(() => {
    return () => {
      dispatch(clearCurrentDictionary());
    };
  }, []);

  const renderWord = useCallback(({item}) => <WordListItem word={item} />, []);

  const screenHeader = useMemo(() => <Header left={<BackButton />} />, []);

  return (
    <Layout withoutPaddings customHeader={screenHeader}>
      <ScreenList
        refreshing={words.isRefreshing}
        onRefresh={words.refreshList}
        data={words.dataset}
        ListHeaderComponent={DictionaryDetails}
        renderItem={renderWord}
        keyExtractor={item => item._id}
        onEndReachedThreshold={0.2}
        onEndReached={words.loadMoreItems}
      />
    </Layout>
  );
};

export default Dictionary;
