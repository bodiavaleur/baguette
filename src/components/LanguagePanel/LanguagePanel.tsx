import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Header from '~components/Header';
import AddButton from '~components/Header/plugins/AddButton';
import {DictionaryRoutes} from '~navigation/routes';
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';
import useToggle from '~hooks/useToggle';
import Animated, {
  SlideInUp,
  ZoomInEasyUp,
  ZoomOutEasyUp,
} from 'react-native-reanimated';
import {languageIcon, panelLanguages} from '~components/LanguagePanel/config';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import {useSelector} from 'react-redux';
import {selectLanguage} from '~redux/app/app.selectors';
import {changeLanguage} from '~redux/app/app.slice';
import {Language} from '~config/language';
import {clearCurrentDictionary} from '~redux/dictionary/dictionary.slice';
import {clearTrainingDictionary} from '~redux/training/training.slice';
import {clearCurrentWord} from '~redux/word/word.slice';
import {storage} from '~helpers/storage';

const LanguagePanel: React.FC = () => {
  const [showLanguages, toggleLanguages] = useToggle();
  const language = useSelector(selectLanguage);
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const onAddPress = () => {
    navigation.navigate(DictionaryRoutes.NewDictionary);
  };

  const headerLanguage = () => {
    const Icon = languageIcon[language];
    return (
      <TouchableOpacity onPress={toggleLanguages}>
        <Icon width={40} height={40} />
      </TouchableOpacity>
    );
  };

  const onLanguageChange = async (code: Language) => {
    dispatch(changeLanguage(code));
    dispatch(clearCurrentDictionary());
    dispatch(clearTrainingDictionary());
    dispatch(clearCurrentWord());

    await storage.lastUsedDictionary.clear();
    await storage.trainingDictionary.clear();

    toggleLanguages();
  };

  return (
    <>
      <Header
        left={headerLanguage()}
        right={<AddButton onAdd={onAddPress} />}
      />
      {showLanguages && (
        <Animated.View entering={SlideInUp} style={styles.container}>
          {panelLanguages.map(({title, code}, index) => {
            const isSelected = language === code;
            const Icon = languageIcon[code];
            const entering = ZoomInEasyUp.delay((index + 1) * 150);

            return (
              <Animated.View
                key={code}
                entering={entering}
                exiting={ZoomOutEasyUp}>
                <TouchableOpacity
                  style={[styles.language, isSelected ? styles.selected : null]}
                  onPress={() => onLanguageChange(code)}>
                  <Icon />
                  <Text style={styles.languageText}>{title}</Text>
                </TouchableOpacity>
              </Animated.View>
            );
          })}
        </Animated.View>
      )}
    </>
  );
};

export default React.memo(LanguagePanel);
