import React, {useMemo} from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Layout from '~containers/Layout';
import Header from '~components/Header';
import CloseButton from '~components/Header/plugins/CloseButton';
import SaveButton from '~components/Header/plugins/SaveButton';
import {useSelector} from 'react-redux';
import {getCurrentWord, getWordStatuses} from '~redux/word/word.selectors';
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
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';
import {getCurrentDictionary} from '~redux/dictionary/dictionary.selectors';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import {deleteWord, editWord, uploadWordImage} from '~redux/word/word.thunks';
import {
  ModalMessageStrings,
  ModalStatusStrings,
  ModalTitleStrings,
} from '~config/strings/modals';
import Button from '~components/Button';
import {DictionaryRoutes} from '~navigation/routes';
import {ButtonStrings} from '~config/strings/buttons';
import useImagePicker from '~hooks/useImagePicker';
import Avatar from '~components/Avatar';

const {Word, Example} = EditWordFields;

const EditWord: React.FC = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const dictionary = useSelector(getCurrentDictionary);
  const word = useSelector(getCurrentWord);
  const statuses = useSelector(getWordStatuses);
  const translations = useMultipleInputs(word?.translations);
  const imagePicker = useImagePicker();

  const handleSaveWord = async (values: EditWordValues) => {
    const updatedWord = {
      ...values,
      translations: translations.inputs,
      wordId: word?._id,
    };

    if (imagePicker.image) {
      const args = {wordId: word?._id, image: imagePicker.image};
      await dispatch(uploadWordImage(args));
    }

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

  const isImageUploading = statuses[uploadWordImage.typePrefix].pending;

  return (
    <Layout withScroll customHeader={screenHeader}>
      <View style={styles.container}>
        <Avatar
          style={styles.avatar}
          src={imagePicker.image?.path ?? word?.image}
          onPress={imagePicker.pickFromGallery}
          size={128}
          loading={isImageUploading}
          label={word?.word}
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
