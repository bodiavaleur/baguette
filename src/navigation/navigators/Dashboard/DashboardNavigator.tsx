import React, {useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DashboardRoutes} from '~navigation/routes';
import {dashboardPanelConfig} from './config';
import {ROUTES_TITLE} from '~navigation/routesTitle';
import type {TabIconProps} from './config';
import Home from '~screens/Home';
import {View} from 'react-native-ui-lib';
import styles from './styles';
import HomeIcon from '~assets/icons/home.svg';
import DictionaryIcon from '~assets/icons/book.svg';
import TrainingIcon from '~assets/icons/bullseye.svg';
import AccountIcon from '~assets/icons/account.svg';
import TabPlusButton from '~components/TabPlusButton';
import DictionaryNavigator from '~navigation/navigators/Dictionary';

const Tab = createBottomTabNavigator();

const DashboardNavigator: React.FC = () => {
  const makeTabIcon = useCallback(
    (routeName: DashboardRoutes, Icon) => ({
      tabBarLabel: ROUTES_TITLE[routeName],
      tabBarIcon: ({color}: TabIconProps) => (
        <View style={styles.tabIcon}>
          <Icon color={color} />
        </View>
      ),
    }),
    [],
  );

  const plusButton = {
    tabBarLabel: '',
    tabBarIcon: () => <TabPlusButton />,
  };

  return (
    <Tab.Navigator {...dashboardPanelConfig}>
      <Tab.Screen
        name={DashboardRoutes.Home}
        component={Home}
        options={makeTabIcon(DashboardRoutes.Home, HomeIcon)}
      />
      <Tab.Screen
        name={DashboardRoutes.Dictionary}
        component={DictionaryNavigator}
        options={makeTabIcon(DashboardRoutes.Dictionary, DictionaryIcon)}
      />
      <Tab.Screen
        name={DashboardRoutes.AddWord}
        component={Home}
        options={plusButton}
      />
      <Tab.Screen
        name={DashboardRoutes.Training}
        component={Home}
        options={makeTabIcon(DashboardRoutes.Training, TrainingIcon)}
      />
      <Tab.Screen
        name={DashboardRoutes.Account}
        component={Home}
        options={makeTabIcon(DashboardRoutes.Account, AccountIcon)}
      />
    </Tab.Navigator>
  );
};

export default DashboardNavigator;
