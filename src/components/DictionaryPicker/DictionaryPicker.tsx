import React, {useCallback, useMemo} from 'react';
import {FlatList, StyleProp, View, ViewStyle} from 'react-native';
import styles from './styles';
import {Picker} from 'react-native-ui-lib';
import {PickerItemLabeledValue} from 'react-native-ui-lib/typings';
import {InputPlaceholderStrings} from '~config/strings/inputs';
import {useSelector} from 'react-redux';
import {selectCurrentDictionary} from '~redux/dictionary/dictionary.selectors';
import {useGetMyDictionariesQuery} from '~services/api/dictionary';

interface DictionaryPickerProps {
  style?: StyleProp<ViewStyle>;
  selectedDictionaryId: string;
  onChange: (value: string) => void;
}

const DictionaryPicker: React.FC<DictionaryPickerProps> = ({
  style,
  selectedDictionaryId,
  onChange,
}) => {
  const currentDictionary = useSelector(selectCurrentDictionary);
  const myDictionaries = useGetMyDictionariesQuery(currentDictionary);
  const dictionaries = useMemo(
    () => myDictionaries.data ?? [],
    [myDictionaries],
  );

  const handleChange = (item: PickerItemLabeledValue) => onChange(item.value);

  const renderDictionary = useCallback(
    ({item}) => (
      <Picker.Item key={item._id} value={item._id} label={item.name} />
    ),
    [],
  );

  const renderLabel = useCallback(
    (value: string) => {
      const dictionary = dictionaries.find(({_id}) => _id === value);

      return dictionary?.name;
    },
    [dictionaries],
  );

  return (
    <View style={[styles.container, style]}>
      <Picker
        containerStyle={styles.picker}
        floatingPlaceholder
        placeholder={InputPlaceholderStrings.Dictionary}
        getLabel={renderLabel}
        value={selectedDictionaryId}
        enableModalBlur={false}
        onChange={handleChange}>
        <FlatList
          data={dictionaries}
          keyExtractor={item => item._id}
          renderItem={renderDictionary}
        />
      </Picker>
    </View>
  );
};

export default DictionaryPicker;
