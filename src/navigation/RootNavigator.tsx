import 'react-native-gesture-handler';
import React, {useCallback} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AuthRoutes, DashboardRoutes} from './routes';
import AuthNavigator from '~navigation/navigators/Auth';
import DashboardNavigator from '~navigation/navigators/Dashboard';
import {tokenStorage} from '~helpers/storage';
import {Navigation, navigationRef} from '~helpers/Navigation';

const Stack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
  const checkAuth = useCallback(async () => {
    const tokens = await tokenStorage.get();

    if (tokens) {
      Navigation.reset(DashboardRoutes.Root);
    }
  }, []);

  return (
    <NavigationContainer ref={navigationRef} onReady={checkAuth}>
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
