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
}

const ActionIcon: React.FC<ActionIconProps> = ({icon: Icon, ...props}) => {
  return (
    <TouchableOpacity {...props}>
      <View>
        <Blur style={styles.blur} />
        <View style={styles.iconContainer}>
          <Icon style={styles.icon} color={theme.colors.text} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ActionIcon;
