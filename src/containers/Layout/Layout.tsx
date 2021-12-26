import React, {useMemo} from 'react';
import {ScrollView, View} from 'react-native';
import type {StyleProp, ViewStyle} from 'react-native';
import styles from './styles';
import Header from '~components/Header';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BOTTOM_BAR_HEIGHT} from '~config/device';

interface LayoutProps {
  style?: StyleProp<ViewStyle>;
  safeAreaStyle?: StyleProp<ViewStyle>;
  withScroll?: boolean;
  withoutPaddings?: boolean;
  withoutSafeBottom?: boolean;
  customHeader?: React.ReactNode;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  style,
  safeAreaStyle,
  withScroll,
  withoutPaddings,
  customHeader,
  children,
  withoutSafeBottom,
}) => {
  const insets = useSafeAreaInsets();

  const containerStyle = useMemo(
    () => [
      styles.contentContainer,
      withoutPaddings ? styles.noPadding : null,
      style,
    ],
    [withoutPaddings, style, insets],
  );

  const safeContainerStyle = useMemo(
    () => ({
      paddingTop: insets.top,
      paddingBottom: withoutSafeBottom ? 0 : insets.bottom + BOTTOM_BAR_HEIGHT,
    }),
    [insets, withoutSafeBottom],
  );

  const defaultHeader = <Header />;

  return (
    <View style={[styles.container, safeContainerStyle, safeAreaStyle]}>
      {customHeader !== undefined ? customHeader : defaultHeader}
      {withScroll ? (
        <ScrollView contentContainerStyle={containerStyle}>
          {children}
        </ScrollView>
      ) : (
        <View style={[containerStyle, styles.withFlex]}>{children}</View>
      )}
    </View>
  );
};

export default Layout;
