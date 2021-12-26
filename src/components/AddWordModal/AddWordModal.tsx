import React from 'react';
import {Modal, Text, View} from 'react-native';
import Blur from '~components/Blur';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button} from 'react-native-ui-lib';
import {InputPlaceholderStrings} from '~config/strings/inputs';
import ActionIcon from '~components/ActionIcon';
import CloseIcon from '~assets/icons/close.svg';
import AvoidKeyboard from '~containers/AvoidKeyboard';
import WordInput from '~components/WordInput';

interface AddWordModalProps {
  isOpen: boolean;
  onCancel: () => void;
}

const AddWordModal: React.FC<AddWordModalProps> = ({isOpen, onCancel}) => {
  const insets = useSafeAreaInsets();

  return (
    <Modal animationType="slide" transparent={true} visible={isOpen}>
      <Blur blurType="dark" />
      <AvoidKeyboard>
        <View style={styles.container}>
          <View style={[styles.content, {paddingTop: insets.top}]}>
            <View style={styles.header}>
              <View />
              <Text style={styles.headerTitle}>Add word</Text>
              <ActionIcon
                style={styles.closeIcon}
                icon={CloseIcon}
                onPress={onCancel}
              />
            </View>
            <View style={styles.inputs}>
              <WordInput
                autoFocus
                placeholder={InputPlaceholderStrings.AddWord}
              />
              <WordInput
                placeholder={InputPlaceholderStrings.WordTranslation}
              />
            </View>
            <Button label="Add word" />
          </View>
        </View>
      </AvoidKeyboard>
    </Modal>
  );
};

export default AddWordModal;
