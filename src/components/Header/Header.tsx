import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {useRoute} from '@react-navigation/native';
import {ROUTES_TITLE} from '~navigation/routesTitle';
import HeaderTitle from '~components/Header/plugins/HeaderTitle';

interface HeaderProps {
  customTitle?: string;
  subtitle?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  customTitle,
  subtitle,
  left,
  right,
}) => {
  const route = useRoute();
  const title = customTitle || ROUTES_TITLE[route.name];

  return (
    <View style={styles.container}>
      {left && <View style={styles.leftPlugins}>{left}</View>}
      <HeaderTitle title={title} subtitle={subtitle} />
      {right && <View style={styles.rightPlugins}>{right}</View>}
    </View>
  );
};

export default Header;
