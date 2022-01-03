import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {theme} from '~config/theme';
import {Spacing} from '~types/theme';

interface DividerProps {
  spacing?: Spacing | null;
}

const Divider: React.FC<DividerProps> = ({spacing = 'medium'}) => {
  const marginStyle = {marginVertical: spacing ? theme.spacing[spacing] : 0};

  return <View style={[styles.container, marginStyle]} />;
};

export default Divider;
