import React, {useEffect} from 'react';
import styles from './styles';
import Layout from '~containers/Layout';
import Header from '~components/Header';
import BackButton from '~components/Header/plugins/BackButton';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import {useSelector} from 'react-redux';
import {clearCurrentWord} from '~redux/word/word.slice';
import WordDetailsFrame from '~components/WordDetailsFrame';
import EditButton from '~components/Header/plugins/EditButton';
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';
import {WordRoutes} from '~navigation/routes';
import {selectCurrentWord} from '~redux/word/word.selectors';
import {useGetWordByIdQuery} from '~services/api/word';

const WordDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const currentWord = useSelector(selectCurrentWord);
  const wordById = useGetWordByIdQuery(currentWord);

  const onEdit = () => {
    navigation.navigate(WordRoutes.EditWord);
  };

  useEffect(() => {
    return () => {
      dispatch(clearCurrentWord());
    };
  }, []);

  const header = (
    <Header left={<BackButton />} right={<EditButton onEdit={onEdit} />} />
  );

  return (
    <Layout withScroll style={styles.container} customHeader={header}>
      <WordDetailsFrame word={wordById.data} />
    </Layout>
  );
};

export default WordDetails;
