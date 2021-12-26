import React from 'react';
import {
  BlurView,
  BlurViewProperties,
  VibrancyView,
  VibrancyViewProperties,
} from '@react-native-community/blur';
import {IOS_DEVICE} from '~config/device';
import styles from './styles';
import {StyleProp, ViewStyle} from 'react-native';

interface BlurProps extends BlurViewProperties, VibrancyViewProperties {
  style?: StyleProp<ViewStyle>;
}

const Blur: React.FC<BlurProps> = ({style, ...props}) => {
  return IOS_DEVICE ? (
    <VibrancyView
      blurType="xlight"
      style={[styles.container, style]}
      {...props}
    />
  ) : (
    <BlurView style={[styles.container, style]} {...props} />
  );
};

export default Blur;
