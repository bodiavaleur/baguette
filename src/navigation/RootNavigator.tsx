import 'react-native-gesture-handler';
import React, {useCallback} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AuthRoutes, DashboardRoutes, TrainingRoutes} from './routes';
import AuthNavigator from '~navigation/navigators/Auth';
import DashboardNavigator from '~navigation/navigators/Dashboard';
import {storage} from '~helpers/storage';
import {navigationRef} from '~helpers/Navigation';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import {fetchMyDictionaries} from '~redux/dictionary/dictionary.thunks';
import Flashcards from '~screens/Training/Flashcards';
import {authenticateUser} from '~redux/app/app.slice';
import {useSelector} from 'react-redux';
import {getIsAuthenticated} from '~redux/app/app.selectors';

const Stack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useSelector(getIsAuthenticated);

  const checkAuth = useCallback(async () => {
    const tokens = await storage.token.get();

    if (tokens) {
      dispatch(authenticateUser());
      dispatch(fetchMyDictionaries());
    }
  }, []);

  return (
    <NavigationContainer ref={navigationRef} onReady={checkAuth}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAuthenticated ? (
          <>
            <Stack.Screen
              name={DashboardRoutes.Root}
              component={DashboardNavigator}
            />

            <Stack.Screen
              name={TrainingRoutes.Flashcards}
              component={Flashcards}
            />
          </>
        ) : (
          <Stack.Screen name={AuthRoutes.Root} component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
