import React, {useMemo} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';
import styles from './styles';
import Header from '~components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated, {Layout as ReanimatedLayout} from 'react-native-reanimated';

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
      edges={['right', 'left']}>
      {customHeader !== undefined ? customHeader : defaultHeader}
      {withScroll ? (
        <Animated.ScrollView
          layout={ReanimatedLayout}
          contentContainerStyle={containerStyle}>
          {children}
        </Animated.ScrollView>
      ) : (
        <Animated.View
          layout={ReanimatedLayout}
          style={[containerStyle, styles.withFlex]}>
          {children}
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

export default Layout;
