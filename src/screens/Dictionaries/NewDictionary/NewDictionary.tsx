import React, {useMemo} from 'react';
import {View} from 'react-native';
import styles from './styles';
import Layout from '~containers/Layout';
import Input from '~components/Input';
import Header from '~components/Header';
import BackButton from '~components/Header/plugins/BackButton';
import {ButtonStrings} from '~config/strings/buttons';
import {useFormik} from 'formik';
import {
  initialValues,
  validationSchema,
  NewDictionaryValues,
  NewDictionaryFields,
} from './config';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';
import {
  createDictionary,
  uploadDictionaryImage,
} from '~redux/dictionary/dictionary.thunks';
import useImagePicker from '~hooks/useImagePicker';
import Button from '~components/Button';
import Avatar from '~components/Avatar';
import {useSelector} from 'react-redux';
import {getDictionaryStatuses} from '~redux/dictionary/dictionary.selectors';

const {Name, Description} = NewDictionaryFields;

const NewDictionary: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const imagePicker = useImagePicker();
  const statuses = useSelector(getDictionaryStatuses);

  const handleSubmit = async (values: NewDictionaryValues) => {
    const dictionary = await dispatch(createDictionary(values)).unwrap();
    if (imagePicker.image) {
      const args = {dictionaryId: dictionary?._id, image: imagePicker.image};
      await dispatch(uploadDictionaryImage(args));
    }

    navigation.goBack();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const screenHeader = useMemo(() => <Header left={<BackButton />} />, []);

  const isImageUploading = statuses[uploadDictionaryImage.typePrefix].pending;

  return (
    <Layout withScroll customHeader={screenHeader}>
      <View style={styles.container}>
        <Avatar
          style={styles.avatar}
          size={128}
          label="+"
          onPress={imagePicker.pickFromGallery}
          src={imagePicker.image?.path}
          loading={isImageUploading}
        />
        <Input
          placeholder="Name"
          onChangeText={formik.handleChange(Name)}
          value={formik.values[Name]}
        />
        <Input
          placeholder="Description"
          onChangeText={formik.handleChange(Description)}
          value={formik.values[Description]}
        />
      </View>
      <Button title={ButtonStrings.Create} onPress={formik.handleSubmit} />
    </Layout>
  );
};

export default NewDictionary;
