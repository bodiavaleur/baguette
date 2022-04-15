import React from 'react';
import styles from './styles';
import RNPickerSelect from 'react-native-picker-select';
import {WordType} from '~config/words';
import {getWordTypeOptions} from './config';
import {InputPlaceholderStrings} from '~config/strings/inputs';
import {theme} from '~config/theme';

const {SelectType} = InputPlaceholderStrings;

interface WordTypeDropdownProps {
  onSelectType: (type: WordType) => void;
  value: WordType | null;
}

const WordTypeDropdown: React.FC<WordTypeDropdownProps> = ({
  onSelectType,
  value,
}) => {
  const options = getWordTypeOptions();

  const placeholder = {
    label: SelectType,
    value: '',
    color: theme.colors.placeholderGray,
  };

  return (
    <RNPickerSelect
      style={styles}
      items={options}
      placeholder={placeholder}
      onValueChange={onSelectType}
      value={value}
    />
  );
};

export default WordTypeDropdown;
