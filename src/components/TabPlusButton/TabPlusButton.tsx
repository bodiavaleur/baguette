import React from 'react';
import styles from './styles';
import PlusIcon from '~assets/icons/plus.svg';
import {View} from 'react-native-ui-lib';
import {theme} from '~config/theme';

const TabPlusButton: React.FC = () => {
  return (
    <View style={styles.container}>
      <PlusIcon color={theme.colors.white} />
    </View>
  );
};

export default TabPlusButton;
