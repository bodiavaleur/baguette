import React, {useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DashboardRoutes} from '~navigation/routes';
import Home from '~screens/Home';
import DictionaryNavigator from '~navigation/navigators/Dictionary';
import TrainingNavigator from '~navigation/navigators/Training';
import useToggle from '~hooks/useToggle';
import AddWordModal from '~components/AddWordModal';
import HomeIcon from '~assets/icons/home.svg';
import DictionaryIcon from '~assets/icons/book.svg';
import TrainingIcon from '~assets/icons/bullseye.svg';
import AccountIcon from '~assets/icons/account.svg';
import TabPlusButton from '~components/TabPlusButton';
import {dashboardPanelConfig} from '~navigation/navigators/Dashboard/config';
import {ROUTES_TITLE} from '~navigation/routesTitle';
import {View} from 'react-native';
import styles from './styles';

const Tab = createBottomTabNavigator();

const DashboardNavigator: React.FC = () => {
  const [showAddWordModal, toggleAddWordModal] = useToggle();

  const makeTabIcon = useCallback(
    (routeName: string, Icon) => ({
      tabBarLabel: ROUTES_TITLE[routeName],
      tabBarIcon: ({color}: any) => (
        <View style={styles.tabIcon}>
          <Icon color={color} />
        </View>
      ),
    }),
    [],
  );

  const plusButton = {
    tabBarLabel: '',
    tabBarIcon: () => <TabPlusButton onPress={toggleAddWordModal} />,
  };

  return (
    <>
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
          component={TrainingNavigator}
          options={makeTabIcon(DashboardRoutes.Training, TrainingIcon)}
        />
        <Tab.Screen
          name={DashboardRoutes.Account}
          component={Home}
          options={makeTabIcon(DashboardRoutes.Account, AccountIcon)}
        />
      </Tab.Navigator>

      <AddWordModal isOpen={showAddWordModal} onCancel={toggleAddWordModal} />
    </>
  );
};

export default DashboardNavigator;
