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
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';
import useImagePicker from '~hooks/useImagePicker';
import Button from '~components/Button';
import Avatar from '~components/Avatar';
import {InputPlaceholderStrings} from '~config/strings/inputs';
import {INPUT_LARGE_LENGTH} from '~config/inputs';
import {
  useCreateDictionaryMutation,
  useUploadDictionaryImageMutation,
} from '~services/api/dictionary';
import {useSelector} from 'react-redux';
import {selectLanguage} from '~redux/app/app.selectors';

const {Name, Description} = NewDictionaryFields;

const NewDictionary: React.FC = () => {
  const navigation = useAppNavigation();
  const imagePicker = useImagePicker();
  const language = useSelector(selectLanguage);
  const [createDictionary] = useCreateDictionaryMutation();
  const [uploadDictionaryImage, imageResult] =
    useUploadDictionaryImageMutation();

  const handleSubmit = async (values: NewDictionaryValues) => {
    const dictionary = await createDictionary({...values, language}).unwrap();

    if (imagePicker.image) {
      const args = {dictionaryId: dictionary?._id, image: imagePicker.image};
      await uploadDictionaryImage(args).unwrap();
    }

    navigation.goBack();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const screenHeader = useMemo(() => <Header left={<BackButton />} />, []);

  return (
    <Layout withScroll customHeader={screenHeader}>
      <View style={styles.container}>
        <Avatar
          style={styles.avatar}
          size={128}
          label="+"
          onPress={imagePicker.pickFromGallery}
          src={imagePicker.image?.path}
          loading={imageResult.isLoading}
        />
        <Input
          placeholder={InputPlaceholderStrings.Name}
          onChangeText={formik.handleChange(Name)}
          value={formik.values[Name]}
        />
        <Input
          multiline
          maxLength={INPUT_LARGE_LENGTH}
          placeholder={InputPlaceholderStrings.Description}
          onChangeText={formik.handleChange(Description)}
          value={formik.values[Description]}
        />
      </View>
      <Button title={ButtonStrings.Create} onPress={formik.handleSubmit} />
    </Layout>
  );
};

export default NewDictionary;
