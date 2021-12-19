import 'react-native-gesture-handler';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AuthRoutes, DashboardRoutes} from './routes';
import AuthNavigator from '~navigation/navigators/Auth';
import DashboardNavigator from '~navigation/navigators/Dashboard';

const Stack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={AuthRoutes.Root} component={AuthNavigator} />
        <Stack.Screen
          name={DashboardRoutes.Root}
          component={DashboardNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
