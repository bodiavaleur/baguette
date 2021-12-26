import React from 'react';
import {TouchableOpacity} from 'react-native';
import Svg from 'react-native-svg/lib/typescript';
import type {TouchableOpacityProps} from 'react-native';
import type {SvgProps} from 'react-native-svg';
import styles from './styles';
import {theme} from '~config/theme';

const ICON_DEFAULT_SIZE = 24;

interface ActionIconProps extends TouchableOpacityProps {
  icon: new (props: SvgProps) => Svg;
  size?: number;
}

const ActionIcon: React.FC<ActionIconProps> = ({
  icon: Icon,
  size = ICON_DEFAULT_SIZE,
  ...props
}) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Icon width={size} height={size} color={theme.colors.text} />
    </TouchableOpacity>
  );
};

export default ActionIcon;
