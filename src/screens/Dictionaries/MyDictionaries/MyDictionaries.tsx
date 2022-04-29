import React, {useCallback} from 'react';
import Layout from '~containers/Layout';
import {useFocusEffect} from '@react-navigation/native';
import DictionaryWidget from '~components/DictionaryWidget';
import ScreenList from '~containers/ScreenList';
import dictionaryApi from '~services/api/dictionary';
import useInfinityScroll from '~hooks/useInfinityScroll';
import {useSelector} from 'react-redux';
import {selectLanguage} from '~redux/app/app.selectors';
import LanguagePanel from '~components/LanguagePanel';

const {getMyDictionaries} = dictionaryApi.endpoints;

const MyDictionaries: React.FC = () => {
  const language = useSelector(selectLanguage);
  const dictionaries = useInfinityScroll(getMyDictionaries, {language});

  useFocusEffect(
    useCallback(() => {
      dictionaries.refetch();
    }, []),
  );

  const renderItem = useCallback(
    ({item}) => <DictionaryWidget dictionary={item} />,
    [],
  );

  return (
    <Layout withoutPaddings customHeader={<LanguagePanel />}>
      <ScreenList
        data={dictionaries.dataset}
        refreshing={dictionaries.isRefreshing}
        onRefresh={dictionaries.refreshList}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={item => item._id}
        onEndReachedThreshold={0.2}
        onEndReached={dictionaries.loadMoreItems}
      />
    </Layout>
  );
};

export default MyDictionaries;
