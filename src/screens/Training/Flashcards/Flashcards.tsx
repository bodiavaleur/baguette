import React, {useCallback, useMemo} from 'react';
import {FlatList} from 'react-native';
import styles from './styles';
import Layout from '~containers/Layout';
import Flashcard from '~components/Flashcard';
import {useSelector} from 'react-redux';
import Header from '~components/Header';
import BackButton from '~components/Header/plugins/BackButton';
import {getTrainingDictionary} from '~redux/training/training.selectors';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useGetTrainingDictionaryQuery} from '~services/api/training';

const Flashcards: React.FC = () => {
  const trainingDictionary = useSelector(getTrainingDictionary);
  const dictionary = useGetTrainingDictionaryQuery(trainingDictionary);

  const renderItem = useCallback(
    ({item, index}) => <Flashcard word={item} index={index} />,
    [],
  );

  const screenHeader = useMemo(() => <Header left={<BackButton />} />, []);
  const listData = dictionary.data?.dictionary ?? [];

  return (
    <Layout withoutPaddings withoutSafeBottom customHeader={screenHeader}>
      <GestureHandlerRootView>
        <FlatList
          style={styles.container}
          scrollEnabled={false}
          contentContainerStyle={styles.content}
          data={listData}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </GestureHandlerRootView>
    </Layout>
  );
};

export default Flashcards;
