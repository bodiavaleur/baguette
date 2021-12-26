import React, {useCallback} from 'react';
import styles from './styles';
import Layout from '~containers/Layout/Layout';
import WordListItem from '~components/WordListItem';
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';
import {DictionaryRoutes} from '~navigation/routes';
import {useFocusEffect} from '@react-navigation/native';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import {useSelector} from 'react-redux';
import {getUserDictionary} from '~redux/dictionary/dictionary.selectors';
import {fetchUserDictionary} from '~redux/dictionary/dictionary.thunks';
import ScreenList from '~containers/ScreenList';

const Dictionary: React.FC = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const dictionary = useSelector(getUserDictionary);

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchUserDictionary());
    }, []),
  );

  const openWordDetails = (wordId: string) =>
    navigation.navigate(DictionaryRoutes.WordDetails, {wordId});

  const renderWord = useCallback(
    ({item}) => (
      <WordListItem word={item} onPress={() => openWordDetails(item._id)} />
    ),
    [],
  );

  const data = dictionary?.dictionary ?? [];

  return (
    <Layout withoutPaddings withoutSafeBottom>
      <ScreenList
        style={styles.container}
        data={data}
        renderItem={renderWord}
      />
    </Layout>
  );
};

export default Dictionary;
