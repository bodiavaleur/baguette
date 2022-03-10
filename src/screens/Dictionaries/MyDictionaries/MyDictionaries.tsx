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

const MyDictionaries: React.FC = () => {
  const navigation = useAppNavigation();
  const myDictionaries = useGetMyDictionariesQuery();
  const [firstDictionary, ...dictionaries] = myDictionaries.data ?? [];

  useFocusEffect(
    useCallback(() => {
      myDictionaries.refetch();
    }, []),
  );

  const onAddPress = () => {
    navigation.navigate(DictionaryRoutes.NewDictionary);
  };

  const screenHeader = useMemo(
    () => <Header right={<AddButton onAdd={onAddPress} />} />,
    [],
  );

  const renderItem = useCallback(
    ({item}) => <DictionaryWidget dictionary={item} />,
    [],
  );

  const listHeader = firstDictionary ? (
    <DictionaryWidget fullWidth dictionary={firstDictionary} />
  ) : null;

  return (
    <Layout withoutPaddings withoutSafeBottom customHeader={screenHeader}>
      <ScreenList
        data={dictionaries}
        ListHeaderComponent={listHeader}
        renderItem={renderItem}
        numColumns={2}
      />
    </Layout>
  );
};

export default MyDictionaries;
