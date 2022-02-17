import React from 'react';
import {View} from 'react-native';
import Input from '~components/Input';
import {InputPlaceholderStrings} from '~config/strings/inputs';
import {MultipleInputs} from '~types/hooks';
import styles from './styles';
import ActionIcon from '~components/ActionIcon';
import DeleteIcon from '~assets/icons/delete.svg';
import PlusIcon from '~assets/icons/plus.svg';

interface TranslationInputsProps {
  useInputs: MultipleInputs;
  maxInputsCount?: number;
}

const TranslationInputs: React.FC<TranslationInputsProps> = ({
  useInputs,
  maxInputsCount = 5,
}) => {
  const {inputs, onChange, add, remove} = useInputs;
  const hasMultipleTranslations = inputs.length > 1;
  const notReachedMaxInputs = inputs.length < maxInputsCount;

  return (
    <>
      {inputs?.map((input, index) => {
        const isLastInput = index === inputs.length - 1;

        const numOfTranslation = hasMultipleTranslations ? `#${index + 1}` : '';
        const placeholder = `${InputPlaceholderStrings.WordTranslation} ${numOfTranslation}`;

        return (
          <View style={styles.inputRow} key={index}>
            <Input
              style={styles.input}
              placeholder={placeholder}
              onChangeText={text => onChange(index, text)}
              value={inputs[index]}
            />
            {hasMultipleTranslations && !isLastInput ? (
              <ActionIcon icon={DeleteIcon} onPress={() => remove(index)} />
            ) : null}
            {isLastInput && notReachedMaxInputs ? (
              <ActionIcon icon={PlusIcon} onPress={add} />
            ) : null}
          </View>
        );
      })}
    </>
  );
};

export default TranslationInputs;
