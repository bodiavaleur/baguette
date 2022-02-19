import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import Layout from '~containers/Layout';
import MenuBox from '~components/MenuBox';
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';
import {TrainingRoutes} from '~navigation/routes';
import DictionaryPicker from '~components/DictionaryPicker';
import {useFocusEffect} from '@react-navigation/native';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import {storage} from '~helpers/storage';
import {fetchTrainingDictionary} from '~redux/training/training.thunks';
import ScreenList from '~containers/ScreenList';

const Menu: React.FC = () => {
  const [dictionaryId, setDictionaryId] = useState('');
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const loadSavedDictionary = async () => {
    const savedId = await storage.trainingDictionary.get();

    if (savedId) {
      setDictionaryId(savedId);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadSavedDictionary();

      if (dictionaryId) {
        dispatch(fetchTrainingDictionary(dictionaryId));
      }
    }, [dictionaryId]),
  );

  const onDictionaryChange = useCallback((id: string) => {
    storage.trainingDictionary.set(id);
    setDictionaryId(id);
  }, []);

  const navigateToFlashcards = () => {
    navigation.navigate(TrainingRoutes.Flashcards);
  };

  return (
    <Layout withoutPaddings style={styles.container}>
      <ScreenList
        data={[]}
        renderItem={null}
        ListHeaderComponent={
          <DictionaryPicker
            selectedDictionaryId={dictionaryId}
            onChange={onDictionaryChange}
          />
        }
        ListFooterComponent={
          <View style={styles.trainingMenu}>
            <MenuBox title="Flashcards" onPress={navigateToFlashcards} />
            <MenuBox title="Matches" />
          </View>
        }
        numColumns={2}
      />
    </Layout>
  );
};

export default Menu;
