import React, {useCallback} from 'react';
import {FlatList, StyleProp, View, ViewStyle} from 'react-native';
import styles from './styles';
import {Picker} from 'react-native-ui-lib';
import {PickerItemLabeledValue} from 'react-native-ui-lib/typings';
import {InputPlaceholderStrings} from '~config/strings/inputs';
import dictionaryApi from '~services/api/dictionary';
import useInfinityScroll from '~hooks/useInfinityScroll';
import {useSelector} from 'react-redux';
import {selectLanguage} from '~redux/app/app.selectors';

interface DictionaryPickerProps {
  style?: StyleProp<ViewStyle>;
  selectedDictionaryId: string;
  onChange: (value: string) => void;
}

const {getMyDictionaries} = dictionaryApi.endpoints;

const DictionaryPicker: React.FC<DictionaryPickerProps> = ({
  style,
  selectedDictionaryId,
  onChange,
}) => {
  const language = useSelector(selectLanguage);
  const dictionaries = useInfinityScroll(getMyDictionaries, {language});

  const handleChange = (item: PickerItemLabeledValue) => onChange(item.value);

  const renderDictionary = useCallback(
    ({item}) => (
      <Picker.Item key={item._id} value={item._id} label={item.name} />
    ),
    [],
  );

  const renderLabel = useCallback(
    (value: string) => {
      const dictionary = dictionaries.dataset.find(({_id}) => _id === value);

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
          data={dictionaries.dataset}
          refreshing={dictionaries.isRefreshing}
          onRefresh={dictionaries.refreshList}
          keyExtractor={item => item._id}
          renderItem={renderDictionary}
          onEndReachedThreshold={0.2}
          onEndReached={dictionaries.loadMoreItems}
        />
      </Picker>
    </View>
  );
};

export default DictionaryPicker;
