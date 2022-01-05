import React, {useMemo} from 'react';
import {Alert, View} from 'react-native';
import styles from './styles';
import Layout from '~containers/Layout';
import Header from '~components/Header';
import CloseButton from '~components/Header/plugins/CloseButton';
import SaveButton from '~components/Header/plugins/SaveButton';
import {useSelector} from 'react-redux';
import {getCurrentWord} from '~redux/word/word.selectors';
import {useFormik} from 'formik';
import {
  EditWordFields,
  EditWordValues,
  initialValues,
  validationSchema,
} from './config';
import useMultipleInputs from '~hooks/useMultipleInputs';
import TranslationInputs from '~components/TranslationInputs';
import Input from '~components/Input';
import {InputPlaceholderStrings} from '~config/strings/inputs';
import {Avatar} from 'react-native-ui-lib';
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';
import {getCurrentDictionary} from '~redux/dictionary/dictionary.selectors';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import {deleteWord, editWord} from '~redux/word/word.thunks';
import {
  ModalMessageStrings,
  ModalStatusStrings,
  ModalTitleStrings,
} from '~config/strings/modals';
import Button from '~components/Button';
import {DictionaryRoutes} from '~navigation/routes';
import {ButtonStrings} from '~config/strings/buttons';

const {Word, Example} = EditWordFields;

const EditWord: React.FC = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const dictionary = useSelector(getCurrentDictionary);
  const word = useSelector(getCurrentWord);
  const translations = useMultipleInputs(word?.translations);

  const handleSaveWord = async (values: EditWordValues) => {
    const updatedWord = {
      ...values,
      translations: translations.inputs,
      wordId: word?._id,
    };

    await dispatch(editWord(updatedWord));

    Alert.alert(ModalStatusStrings.Success, ModalMessageStrings.WordUpdated);
    navigation.goBack();
  };

  const handleDeleteWord = async () => {
    const onDeleteWord = async () => {
      await dispatch(deleteWord(word?._id));
      navigation.navigate(DictionaryRoutes.Dictionary, {
        dictionaryId: dictionary?._id,
      });
    };

    Alert.alert(ModalTitleStrings.DeleteWord, ModalMessageStrings.CantUndone, [
      {
        text: ButtonStrings.Cancel,
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: ButtonStrings.Delete,
        onPress: onDeleteWord,
        style: 'destructive',
      },
    ]);
  };

  const formik = useFormik({
    initialValues: initialValues(word),
    validationSchema,
    onSubmit: handleSaveWord,
    enableReinitialize: true,
  });

  const screenHeader = useMemo(
    () => (
      <Header
        left={<CloseButton onClose={navigation.goBack} />}
        right={<SaveButton onSave={formik.handleSubmit} />}
      />
    ),
    [formik],
  );

  return (
    <Layout withScroll customHeader={screenHeader}>
      <View style={styles.container}>
        <Avatar
          containerStyle={styles.avatar}
          size={128}
          label={word?.word.charAt(0)}
          source={{
            uri: word?.image,
          }}
        />

        <Input
          placeholder={InputPlaceholderStrings.AddWord}
          onChangeText={formik.handleChange(Word)}
          value={formik.values[Word]}
        />

        <TranslationInputs useInputs={translations} />

        <Input
          placeholder={InputPlaceholderStrings.WordExample}
          onChangeText={formik.handleChange(Example)}
          value={formik.values[Example]}
        />
      </View>
      <Button
        variant="action"
        action="danger"
        title={ButtonStrings.Delete}
        onPress={handleDeleteWord}
      />
    </Layout>
  );
};

export default EditWord;
