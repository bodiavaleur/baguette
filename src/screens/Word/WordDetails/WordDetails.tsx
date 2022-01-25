import React, {useEffect} from 'react';
import styles from './styles';
import Layout from '~containers/Layout';
import {useRoute} from '@react-navigation/native';
import Header from '~components/Header';
import BackButton from '~components/Header/plugins/BackButton';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import {useSelector} from 'react-redux';
import {getCurrentWord} from '~redux/word/word.selectors';
import {fetchWordById} from '~redux/word/word.thunks';
import {clearCurrentWord} from '~redux/word/word.slice';
import WordDetailsFrame from '~components/WordDetailsFrame';
import EditButton from '~components/Header/plugins/EditButton';
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';
import {WordRoutes} from '~navigation/routes';

const WordDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const route = useRoute();
  const currentWord = useSelector(getCurrentWord);
  const {wordId} = route.params;

  const onEdit = () => {
    navigation.navigate(WordRoutes.EditWord);
  };

  useEffect(() => {
    dispatch(fetchWordById({wordId}));

    return () => {
      dispatch(clearCurrentWord());
    };
  }, []);

  const header = (
    <Header left={<BackButton />} right={<EditButton onEdit={onEdit} />} />
  );

  return (
    <Layout withScroll style={styles.container} customHeader={header}>
      <WordDetailsFrame word={currentWord} />
    </Layout>
  );
};

export default WordDetails;
