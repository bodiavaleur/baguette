import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import {getCurrentDictionary} from '~redux/dictionary/dictionary.selectors';
import {Button} from 'react-native-ui-lib';
import Divider from '~components/Divider';
import Avatar from '~components/Avatar';

const DictionaryDetails: React.FC = () => {
  const dictionary = useSelector(getCurrentDictionary);

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
        <Button label="Train" style={[styles.button, styles.buttonLeft]} />
        <Button label="Test" style={styles.button} />
      </View>
      <Divider />
    </View>
  );
};

export default DictionaryDetails;
