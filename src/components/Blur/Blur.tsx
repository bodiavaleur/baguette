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
  children?: React.ReactNode;
}

const Blur: React.FC<BlurProps> = ({style, children, ...props}) => {
  return IOS_DEVICE ? (
    <VibrancyView
      blurType="xlight"
      style={[styles.container, style]}
      {...props}>
      {children}
    </VibrancyView>
  ) : (
    <BlurView style={[styles.container, style]} {...props}>
      {children}
    </BlurView>
  );
};

export default Blur;
