import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface MenuBoxProps {
  title: string;
  onPress: () => void;
}

const MenuBox: React.FC<MenuBoxProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuBox;
