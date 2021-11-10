import React from 'react';
import {TouchableOpacity} from 'react-native';
import Svg from 'react-native-svg/lib/typescript';
import type {TouchableOpacityProps} from 'react-native';
import type {SvgProps} from 'react-native-svg';

interface ActionIconProps extends TouchableOpacityProps {
  icon: new (props: SvgProps) => Svg;
  opacity?: number;
}

const ActionIcon: React.FC<ActionIconProps> = ({
  icon: Icon,
  opacity,
  ...props
}) => {
  return (
    <TouchableOpacity {...props}>
      <Icon opacity={opacity} />
    </TouchableOpacity>
  );
};

export default ActionIcon;
