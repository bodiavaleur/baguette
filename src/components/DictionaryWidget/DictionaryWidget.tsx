import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Avatar} from 'react-native-ui-lib';
import Blur from '~components/Blur';
import {Dictionary} from '~types/dictionary';
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';
import {DictionaryRoutes} from '~navigation/routes';

interface DictionaryWidgetProps {
  fullWidth?: boolean;
  dictionary: Dictionary;
}

const DictionaryWidget: React.FC<DictionaryWidgetProps> = ({
  fullWidth,
  dictionary,
}) => {
  const navigation = useAppNavigation();

  const onWidgetPress = () => {
    navigation.navigate(DictionaryRoutes.Dictionary, {
      dictionaryId: dictionary?._id,
    });
  };

  const avatarSize = fullWidth ? 76 : 48;
  const containerStyle = [
    styles.container,
    fullWidth ? styles.fullWidth : null,
  ];
  const nameStyle = [styles.name, fullWidth ? styles.largeName : null];

  return (
    <TouchableOpacity style={containerStyle} onPress={onWidgetPress}>
      <Blur style={styles.blur} />
      <View style={styles.content}>
        <Avatar
          containerStyle={styles.image}
          size={avatarSize}
          label="A"
          source={{uri: dictionary?.image}}
        />
        <Text style={nameStyle}>{dictionary?.name}</Text>
        {!!dictionary.description && (
          <Text style={styles.description}>{dictionary.description}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default DictionaryWidget;
