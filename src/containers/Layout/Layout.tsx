import React, {useMemo} from 'react';
import {ScrollView, View} from 'react-native';
import type {StyleProp, ViewStyle} from 'react-native';
import styles from './styles';
import Header from '~components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';

interface LayoutProps {
  style?: StyleProp<ViewStyle>;
  safeAreaStyle?: StyleProp<ViewStyle>;
  withScroll?: boolean;
  withoutPaddings?: boolean;
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
}) => {
  const containerStyle = useMemo(
    () => [
      styles.contentContainer,
      withoutPaddings ? styles.noPadding : null,
      style,
    ],
    [withoutPaddings, style],
  );

  const defaultHeader = <Header />;

  return (
    <SafeAreaView
      style={[styles.container, safeAreaStyle]}
      edges={['top', 'right', 'left']}>
      {customHeader !== undefined ? customHeader : defaultHeader}
      {withScroll ? (
        <ScrollView contentContainerStyle={containerStyle}>
          {children}
        </ScrollView>
      ) : (
        <View style={[containerStyle, styles.withFlex]}>{children}</View>
      )}
    </SafeAreaView>
  );
};

export default Layout;
