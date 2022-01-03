import React, {useMemo} from 'react';
import {View} from 'react-native';
import styles from './styles';
import Layout from '~containers/Layout';
import Input from '~components/Input';
import Header from '~components/Header';
import BackButton from '~components/Header/plugins/BackButton';
import {Button} from 'react-native-ui-lib';
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
import {createDictionary} from '~redux/dictionary/dictionary.thunks';

const {Name, Description, Image} = NewDictionaryFields;

const NewDictionary: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  const handleSubmit = async (values: NewDictionaryValues) => {
    await dispatch(createDictionary(values));
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
      <Button label={ButtonStrings.Create} onPress={formik.handleSubmit} />
    </Layout>
  );
};

export default NewDictionary;
