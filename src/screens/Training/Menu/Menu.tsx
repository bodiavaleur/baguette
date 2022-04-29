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
import ScreenList from '~containers/ScreenList';
import {TrainingMenuStrings} from '~config/strings/training';
import {setTrainingDictionary} from '~redux/training/training.slice';

const Menu: React.FC = () => {
  const dispatch = useAppDispatch();
  const [dictionaryId, setDictionaryId] = useState('');
  const navigation = useAppNavigation();

  const updateTrainingDictionary = (id: string) => {
    dispatch(setTrainingDictionary(id));
    setDictionaryId(id);
  };

  const loadSavedDictionary = async () => {
    const savedId = await storage.trainingDictionary.get();

    if (savedId) {
      updateTrainingDictionary(savedId);
    } else {
      setDictionaryId('');
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadSavedDictionary();
    }, [dictionaryId]),
  );

  const onDictionaryChange = useCallback((id: string) => {
    storage.trainingDictionary.set(id);
    updateTrainingDictionary(id);
  }, []);

  const navigateToFlashcards = () => {
    navigation.navigate(TrainingRoutes.Flashcards);
  };

  const isDictionarySelected = Boolean(dictionaryId);
  const hasMenuEvents = isDictionarySelected ? undefined : 'none';
  const menuStyle = [
    styles.trainingMenu,
    !isDictionarySelected ? styles.disabled : null,
  ];

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
          <View style={menuStyle} pointerEvents={hasMenuEvents}>
            <MenuBox
              title={TrainingMenuStrings.Flashcards}
              onPress={navigateToFlashcards}
            />
            <MenuBox title={TrainingMenuStrings.Matches} />
          </View>
        }
        numColumns={2}
      />
    </Layout>
  );
};

export default Menu;
