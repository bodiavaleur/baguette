import React, {useCallback, useMemo} from 'react';
import Layout from '~containers/Layout';
import Header from '~components/Header';
import AddButton from '~components/Header/plugins/AddButton';
import {useFocusEffect} from '@react-navigation/native';
import DictionaryWidget from '~components/DictionaryWidget';
import ScreenList from '~containers/ScreenList';
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';
import {DictionaryRoutes} from '~navigation/routes';
import {useGetMyDictionariesQuery} from '~services/api/dictionary';
import DictionaryButton from '~components/Header/plugins/DictionaryButton';

const MyDictionaries: React.FC = () => {
  const navigation = useAppNavigation();
  const myDictionaries = useGetMyDictionariesQuery();
  const dictionaries = myDictionaries.data ?? [];

  useFocusEffect(
    useCallback(() => {
      myDictionaries.refetch();
    }, []),
  );

  const onAddPress = () => {
    navigation.navigate(DictionaryRoutes.NewDictionary);
  };

  const openUserDictionary = () => {
    navigation.navigate(DictionaryRoutes.MyWords);
  };

  const screenHeader = useMemo(
    () => (
      <Header
        left={<DictionaryButton onPress={openUserDictionary} />}
        right={<AddButton onAdd={onAddPress} />}
      />
    ),
    [],
  );

  const renderItem = useCallback(
    ({item}) => <DictionaryWidget dictionary={item} />,
    [],
  );

  return (
    <Layout withoutPaddings customHeader={screenHeader}>
      <ScreenList data={dictionaries} renderItem={renderItem} numColumns={2} />
    </Layout>
  );
};

export default MyDictionaries;
