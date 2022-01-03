import React from 'react';
import {View} from 'react-native';
import Blur from '~components/Blur';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button, Picker} from 'react-native-ui-lib';
import {InputPlaceholderStrings} from '~config/strings/inputs';
import ActionIcon from '~components/ActionIcon';
import CloseIcon from '~assets/icons/close.svg';
import Input from '~components/Input';
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
import {fetchMyDictionaries} from '~redux/dictionary/dictionary.thunks';
import {useSelector} from 'react-redux';
import {getMyDictionaries} from '~redux/dictionary/dictionary.selectors';

const {DictionaryId, Word, Translation, Example} = NewWordFields;

interface AddWordModalProps {
  isOpen: boolean;
  onCancel: () => void;
}

const AddWordModal: React.FC<AddWordModalProps> = ({isOpen, onCancel}) => {
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();
  const dictionaries = useSelector(getMyDictionaries);

  const handleSubmitWord = async (values: NewWordValues) => {
    await dispatch(createNewWord(values));
    dispatch(fetchMyDictionaries());
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
          <Picker
            placeholder="Dictionary"
            floatingPlaceholder
            value={formik.values[DictionaryId]}
            enableModalBlur={false}
            onChange={item => formik.setFieldValue(DictionaryId, item.value)}>
            {dictionaries?.map(dictionary => (
              <Picker.Item
                key={dictionary._id}
                value={dictionary._id}
                label={dictionary.name}
              />
            ))}
          </Picker>
          <Input
            autoFocus
            placeholder={InputPlaceholderStrings.WordTranslation}
            onChangeText={formik.handleChange(Word)}
            value={formik.values[Word]}
          />
          <Input
            placeholder={InputPlaceholderStrings.AddWord}
            onChangeText={formik.handleChange(Translation)}
            value={formik.values[Translation]}
          />
          <Input
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
