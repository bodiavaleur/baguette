import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import {SvgProps} from 'react-native-svg';
import Svg from 'react-native-svg/lib/typescript';
import {theme} from '~config/theme';

interface NavigationTabProps {
  route: string;
  icon: new (props: SvgProps) => Svg;
  onSelectTab: (tab: string) => void;
  isSelected: boolean;
}

const NavigationTab: React.FC<NavigationTabProps> = ({
  route,
  icon: Icon,
  onSelectTab,
  isSelected,
}) => {
  const handleSelectTab = () => onSelectTab(route);

  const iconColor = isSelected
    ? theme.colors.primary
    : theme.colors.disabledGray;

  return (
    <TouchableOpacity onPress={handleSelectTab} style={styles.container}>
      <Icon width={32} height={32} color={iconColor} />
    </TouchableOpacity>
  );
};

export default NavigationTab;
