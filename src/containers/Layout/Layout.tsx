import React, {useMemo} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import styles from './styles';
import Header from '~components/Header';
import type {StyleProp, ViewStyle} from 'react-native';

interface LayoutProps {
  style?: StyleProp<ViewStyle>;
  withScroll?: boolean;
  withoutPaddings?: boolean;
  customHeader?: React.ReactNode;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  style,
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

  return (
    <SafeAreaView style={styles.container}>
      {customHeader ? customHeader : <Header />}
      {withScroll ? (
        <ScrollView style={containerStyle}>{children}</ScrollView>
      ) : (
        <View style={containerStyle}>{children}</View>
      )}
    </SafeAreaView>
  );
};

export default Layout;
