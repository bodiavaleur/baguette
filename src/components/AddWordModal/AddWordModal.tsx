import React from 'react';
import {View} from 'react-native';
import Blur from '~components/Blur';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button} from 'react-native-ui-lib';
import {InputPlaceholderStrings} from '~config/strings/inputs';
import ActionIcon from '~components/ActionIcon';
import CloseIcon from '~assets/icons/close.svg';
import AvoidKeyboard from '~containers/AvoidKeyboard';
import WordInput from '~components/WordInput';
import {ButtonStrings} from '~config/strings/buttons';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import {useFormik} from 'formik';
import {
  initialValues,
  validationSchema,
  NewWordValues,
  NewWordFields,
} from './config';
import Modal from 'react-native-modal';
import {createNewWord} from '~redux/word/word.thunks';
import {fetchUserDictionary} from '~redux/dictionary/dictionary.thunks';

const {Word, Translation, Example} = NewWordFields;

interface AddWordModalProps {
  isOpen: boolean;
  onCancel: () => void;
}

const AddWordModal: React.FC<AddWordModalProps> = ({isOpen, onCancel}) => {
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();

  const handleSubmitWord = async (values: NewWordValues) => {
    await dispatch(createNewWord(values));
    dispatch(fetchUserDictionary());
    formik.resetForm();
    onCancel();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmitWord,
  });

  return (
    <Modal
      deviceWidth={1}
      deviceHeight={1}
      isVisible={isOpen}
      style={styles.container}>
      <Blur blurType="dark" />
      <View style={[styles.content, {paddingTop: insets.top}]}>
        <View style={styles.header}>
          <ActionIcon icon={CloseIcon} onPress={onCancel} />
        </View>
        <View style={styles.inputs}>
          <WordInput
            autoFocus
            placeholder={InputPlaceholderStrings.WordTranslation}
            onChangeText={formik.handleChange(Word)}
            value={formik.values[Word]}
          />
          <WordInput
            placeholder={InputPlaceholderStrings.AddWord}
            onChangeText={formik.handleChange(Translation)}
            value={formik.values[Translation]}
          />
          <WordInput
            placeholder={InputPlaceholderStrings.WordExample}
            onChangeText={formik.handleChange(Example)}
            value={formik.values[Example]}
          />
        </View>

        <Button label={ButtonStrings.AddWord} onPress={formik.handleSubmit} />
      </View>
    </Modal>
  );
};

export default AddWordModal;
