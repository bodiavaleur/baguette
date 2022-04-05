import React, {useCallback, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import Blur from '~components/Blur';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {InputPlaceholderStrings} from '~config/strings/inputs';
import ActionIcon from '~components/ActionIcon';
import CloseIcon from '~assets/icons/close.svg';
import Input from '~components/Input';
import {ButtonStrings} from '~config/strings/buttons';
import {useFormik} from 'formik';
import {
  initialValues,
  NewWordFields,
  NewWordValues,
  validationSchema,
} from './config';
import Modal from 'react-native-modal';
import AvoidKeyboard from '~containers/AvoidKeyboard';
import TranslationInputs from '~components/TranslationInputs';
import useMultipleInputs from '~hooks/useMultipleInputs';
import Button from '~components/Button';
import useImagePicker from '~hooks/useImagePicker';
import Avatar from '~components/Avatar';
import DictionaryPicker from '~components/DictionaryPicker';
import {storage} from '~helpers/storage';
import {INPUT_LARGE_LENGTH, INPUT_MEDIUM_LENGTH} from '~config/inputs';
import {
  useCreateWordMutation,
  useUploadWordImageMutation,
} from '~services/api/word';

const {DictionaryId, Word, Example} = NewWordFields;

interface AddWordModalProps {
  isOpen: boolean;
  onCancel: () => void;
}

const AddWordModal: React.FC<AddWordModalProps> = ({isOpen, onCancel}) => {
  const insets = useSafeAreaInsets();
  const translations = useMultipleInputs();
  const imagePicker = useImagePicker();
  const [createWord] = useCreateWordMutation();
  const [uploadWordImage, imageResult] = useUploadWordImageMutation();

  const handleHideModal = () => {
    imagePicker.clearImage();
    translations.clear();
    formik.resetForm();
  };

  const handleSubmitWord = async (values: NewWordValues) => {
    const newWordArgs = {...values, translations: translations.inputs};
    const word = await createWord(newWordArgs).unwrap();

    if (imagePicker.image) {
      const uploadArgs = {wordId: word._id, image: imagePicker.image};
      await uploadWordImage(uploadArgs).unwrap();
    }

    formik.resetForm();
    onCancel();
  };

  const onChangeDictionary = useCallback((value: string) => {
    storage.lastUsedDictionary.set(value);
    formik.setFieldValue(DictionaryId, value);
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmitWord,
    enableReinitialize: true,
  });

  useEffect(() => {
    if (isOpen) {
      storage.lastUsedDictionary.get().then(savedId => {
        formik.setFieldValue(DictionaryId, savedId);
      });
    }
  }, [isOpen]);

  const isSubmitDisabled = !formik.isValid || translations.isEmpty;

  return (
    <Modal
      deviceWidth={1}
      deviceHeight={1}
      isVisible={isOpen}
      onModalHide={handleHideModal}>
      <Blur blurType="dark" />
      <AvoidKeyboard>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={styles.container}>
          <View style={[styles.content, {paddingTop: insets.top}]}>
            <View style={styles.header}>
              <ActionIcon icon={CloseIcon} onPress={onCancel} />
            </View>
            <View style={styles.inputs}>
              <View style={styles.pickerPanel}>
                <Avatar
                  size={64}
                  onPress={imagePicker.pickFromGallery}
                  loading={imageResult.isLoading}
                  src={imagePicker.image?.path}
                  label="+"
                />

                <DictionaryPicker
                  style={styles.picker}
                  selectedDictionaryId={formik.values[DictionaryId]}
                  onChange={onChangeDictionary}
                />
              </View>

              <Input
                autoFocus
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
              disabled={isSubmitDisabled}
              title={ButtonStrings.AddWord}
              onPress={formik.handleSubmit}
            />
          </View>
        </ScrollView>
      </AvoidKeyboard>
    </Modal>
  );
};

export default AddWordModal;
