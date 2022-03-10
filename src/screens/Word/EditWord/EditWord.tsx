import React, {useMemo} from 'react';
import {Alert, View} from 'react-native';
import styles from './styles';
import Layout from '~containers/Layout';
import Header from '~components/Header';
import CloseButton from '~components/Header/plugins/CloseButton';
import SaveButton from '~components/Header/plugins/SaveButton';
import {useSelector} from 'react-redux';
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
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
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
import {selectCurrentDictionary} from '~redux/dictionary/dictionary.selectors';
import {useGetDictionaryByIdQuery} from '~services/api/dictionary';
import {selectCurrentWord} from '~redux/word/word.selectors';
import {INPUT_MEDIUM_LENGTH, INPUT_LARGE_LENGTH} from '~config/inputs';
import {
  useDeleteWordMutation,
  useEditWordMutation,
  useGetWordByIdQuery,
  useUploadWordImageMutation,
} from '~services/api/word';

const {Word, Example} = EditWordFields;

const EditWord: React.FC = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const currentDictionary = useSelector(selectCurrentDictionary);
  const currentWord = useSelector(selectCurrentWord);
  const dictionary = useGetDictionaryByIdQuery(currentDictionary);
  const word = useGetWordByIdQuery(currentWord);
  const [editWord] = useEditWordMutation();
  const [deleteWord] = useDeleteWordMutation();
  const [uploadWordImage, imageResult] = useUploadWordImageMutation();

  const translations = useMultipleInputs(word.data?.translations);
  const imagePicker = useImagePicker();

  const handleSaveWord = async (values: EditWordValues) => {
    const updatedWord = {
      ...values,
      translations: translations.inputs,
      wordId: word.data?._id,
    };

    if (imagePicker.image) {
      const args = {wordId: word.data?._id, image: imagePicker.image};
      await dispatch(uploadWordImage(args)).unwrap();
    }

    await editWord(updatedWord).unwrap();

    Alert.alert(ModalStatusStrings.Success, ModalMessageStrings.WordUpdated);
    navigation.goBack();
  };

  const handleDeleteWord = async () => {
    const onDeleteWord = async () => {
      await deleteWord(word.data?._id).unwrap();
      navigation.navigate(DictionaryRoutes.Dictionary, {
        dictionaryId: dictionary.data?._id,
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
    initialValues: initialValues(word.data),
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
          style={styles.avatar}
          src={imagePicker.image?.path ?? word?.image}
          onPress={imagePicker.pickFromGallery}
          size={128}
          loading={imageResult.isLoading}
          label={word?.word}
        />

        <Input
          multiline
          maxLength={INPUT_MEDIUM_LENGTH}
          placeholder={InputPlaceholderStrings.AddWord}
          onChangeText={formik.handleChange(Word)}
          value={formik.values[Word]}
        />

        <TranslationInputs useInputs={translations} />

        <Input
          multiline
          maxLength={INPUT_LARGE_LENGTH}
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
