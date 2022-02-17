import React, {useCallback} from 'react';
import {FlatList, StyleProp, View, ViewStyle} from 'react-native';
import styles from './styles';
import {Picker} from 'react-native-ui-lib';
import {PickerItemLabeledValue} from 'react-native-ui-lib/typings';
import {Dictionary} from '~types/dictionary';
import {InputPlaceholderStrings} from '~config/strings/inputs';
import {storage} from '~helpers/storage';

interface DictionaryPickerProps {
  style?: StyleProp<ViewStyle>;
  data: Dictionary[];
  selectedDictionaryId: string;
  onChange: (value: string) => void;
}

const DictionaryPicker: React.FC<DictionaryPickerProps> = ({
  style,
  data,
  selectedDictionaryId,
  onChange,
}) => {
  const handleChange = (item: PickerItemLabeledValue) => {
    storage.lastUsedDictionary.set(item.value);
    onChange(item.value);
  };

  const renderDictionary = useCallback(
    ({item}) => (
      <Picker.Item key={item._id} value={item._id} label={item.name} />
    ),
    [],
  );

  const renderLabel = useCallback(
    (value: string) => {
      const dictionary = data.find(({_id}) => _id === value);

      return dictionary?.name;
    },
    [data],
  );

  return (
    <View style={[styles.container, style]}>
      <Picker
        floatingPlaceholder
        placeholder={InputPlaceholderStrings.Dictionary}
        getLabel={renderLabel}
        value={selectedDictionaryId}
        enableModalBlur={false}
        onChange={handleChange}>
        <FlatList
          data={data}
          keyExtractor={item => item._id}
          renderItem={renderDictionary}
        />
      </Picker>
    </View>
  );
};

export default DictionaryPicker;
