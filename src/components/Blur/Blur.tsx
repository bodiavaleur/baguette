import React from 'react';
import {
  BlurView,
  BlurViewProperties,
  VibrancyView,
  VibrancyViewProperties,
} from '@react-native-community/blur';
import {IOS_DEVICE} from '~config/device';

interface BlurProps extends BlurViewProperties, VibrancyViewProperties {
  children?: React.ReactNode;
}

const Blur: React.FC<BlurProps> = ({children, ...props}) => {
  return IOS_DEVICE ? (
    <VibrancyView blurType="xlight" {...props}>
      {children}
    </VibrancyView>
  ) : (
    <BlurView {...props}>{children}</BlurView>
  );
};

export default Blur;
