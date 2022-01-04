import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Svg from 'react-native-svg/lib/typescript';
import type {TouchableOpacityProps} from 'react-native';
import type {SvgProps} from 'react-native-svg';
import styles from './styles';
import {theme} from '~config/theme';
import Blur from '~components/Blur';

interface ActionIconProps extends TouchableOpacityProps {
  icon: new (props: SvgProps) => Svg;
  color?: string;
}

const ActionIcon: React.FC<ActionIconProps> = ({
  icon: Icon,
  color,
  ...props
}) => {
  const iconColor = color ?? theme.colors.text;

  return (
    <TouchableOpacity {...props}>
      <View>
        <Blur style={styles.blur} />
        <View style={styles.iconContainer}>
          <Icon style={styles.icon} color={iconColor} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ActionIcon;
