import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import {getCurrentDictionary} from '~redux/dictionary/dictionary.selectors';
import Divider from '~components/Divider';
import Avatar from '~components/Avatar';
import Button from '~components/Button';
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';
import {TrainingRoutes} from '~navigation/routes';

const DictionaryDetails: React.FC = () => {
  const navigation = useAppNavigation();
  const dictionary = useSelector(getCurrentDictionary);

  const onTrainDictionary = () => {
    const params = {dictionaryId: dictionary?._id};
    navigation.navigate(TrainingRoutes.Flashcards, params);
  };

  return (
    <View style={styles.container}>
      <Avatar
        style={styles.avatar}
        size={128}
        label={dictionary?.name}
        src={dictionary?.image}
      />

      <View style={styles.details}>
        <Text style={styles.name}>{dictionary?.name}</Text>
        {!!dictionary?.description && (
          <Text style={styles.description}>{dictionary?.description}</Text>
        )}
      </View>
      <Divider />
      <View style={styles.buttons}>
        <Button
          variant="action"
          action="text"
          title="Train"
          style={[styles.button, styles.buttonLeft]}
          onPress={onTrainDictionary}
        />
        <Button
          variant="action"
          action="text"
          title="Test"
          style={styles.button}
        />
      </View>
      <Divider />
    </View>
  );
};

export default DictionaryDetails;
