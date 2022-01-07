import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface HeaderTitleProps {
  title: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
};

export default HeaderTitle;
