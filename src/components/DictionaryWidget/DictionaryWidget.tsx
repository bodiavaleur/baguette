import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Dictionary} from '~types/dictionary';
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';
import {DictionaryRoutes} from '~navigation/routes';
import Avatar from '~components/Avatar';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import {setCurrentDictionary} from '~redux/dictionary/dictionary.slice';

interface DictionaryWidgetProps {
  dictionary: Dictionary;
}

const DictionaryWidget: React.FC<DictionaryWidgetProps> = ({dictionary}) => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const onWidgetPress = () => {
    dispatch(setCurrentDictionary(dictionary._id));
    navigation.navigate(DictionaryRoutes.Dictionary);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onWidgetPress}>
      <Avatar
        style={styles.image}
        size={48}
        label={dictionary?.name}
        src={dictionary?.image}
      />
      <Text style={styles.name}>{dictionary?.name}</Text>
      {!!dictionary.description && (
        <Text style={styles.description}>{dictionary.description}</Text>
      )}
    </TouchableOpacity>
  );
};

export default DictionaryWidget;
