import React from 'react';
import styles from './styles';
import PlusIcon from '~assets/icons/plus.svg';
import {View} from 'react-native-ui-lib';
import {theme} from '~config/theme';
import {TouchableWithoutFeedback} from 'react-native';

interface TabPlusButtonProps {
  onPress: () => void;
}

const TabPlusButton: React.FC<TabPlusButtonProps> = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <PlusIcon color={theme.colors.white} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TabPlusButton;
