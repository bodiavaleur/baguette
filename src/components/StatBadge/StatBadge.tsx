import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface StatBadgeProps {
  label: string;
  count: number;
}

const StatBadge: React.FC<StatBadgeProps> = ({label, count}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}:</Text>
      <Text style={styles.count}>{count ?? 0}</Text>
    </View>
  );
};

export default StatBadge;
