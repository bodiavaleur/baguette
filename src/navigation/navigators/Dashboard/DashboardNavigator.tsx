import React, {useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DashboardRoutes} from '~navigation/routes';
import Home from '~screens/Home';
import DictionaryNavigator from '~navigation/navigators/Dictionary';
import TrainingNavigator from '~navigation/navigators/Training';
import NavigationBar from '~components/NavigationBar';
import useToggle from '~hooks/useToggle';
import TabPlusButton from '~components/TabPlusButton';
import AddWordModal from '~components/AddWordModal';

const Tab = createBottomTabNavigator();

const DashboardNavigator: React.FC = () => {
  const [showAddWordModal, toggleAddWordModal] = useToggle();

  const showTabBar = useCallback(
    props => (
      <>
        <NavigationBar {...props}>
          <TabPlusButton onPress={toggleAddWordModal} />
        </NavigationBar>

        <AddWordModal isOpen={showAddWordModal} onCancel={toggleAddWordModal} />
      </>
    ),
    [showAddWordModal],
  );

  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={showTabBar}>
      <Tab.Screen name={DashboardRoutes.Home} component={Home} />
      <Tab.Screen
        name={DashboardRoutes.Dictionary}
        component={DictionaryNavigator}
      />
      <Tab.Screen
        name={DashboardRoutes.Training}
        component={TrainingNavigator}
      />
      <Tab.Screen name={DashboardRoutes.Account} component={Home} />
    </Tab.Navigator>
  );
};

export default DashboardNavigator;
