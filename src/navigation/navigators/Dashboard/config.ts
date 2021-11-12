import styles from './styles';
import {theme} from '~config/theme';

export const dashboardPanelConfig = {
  screenOptions: {
    headerShown: false,
    tabBarActiveTintColor: theme.colors.primary,
    tabBarInactiveTintColor: theme.colors.disabledGray,
    tabBarStyle: styles.container,
    tabBarLabelStyle: styles.label,
    tabBarItemStyle: styles.tab,
  },
};

export interface TabIconProps {
  focused: boolean;
  color: string;
}
