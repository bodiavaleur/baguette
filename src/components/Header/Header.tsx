import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import styles from './styles';
import {useRoute} from '@react-navigation/native';
import HeaderTitle from '~components/Header/plugins/HeaderTitle';
import {ROUTES_TITLE} from '~navigation/routesTitle';

interface HeaderProps {
  style?: StyleProp<ViewStyle>;
  left?: React.ReactNode;
  middle?: React.ReactNode;
  right?: React.ReactNode;
  withoutMiddle?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  style,
  left,
  middle,
  right,
  withoutMiddle,
}) => {
  const route = useRoute();
  const routeTitle = ROUTES_TITLE[route.name];

  return (
    <View style={[styles.container, style]}>
      <View style={styles.leftPlugins}>{left}</View>
      {!withoutMiddle && (
        <View style={styles.middlePlugins}>
          {middle ? middle : <HeaderTitle title={routeTitle} />}
        </View>
      )}
      <View style={styles.rightPlugins}>{right}</View>
    </View>
  );
};

export default Header;
