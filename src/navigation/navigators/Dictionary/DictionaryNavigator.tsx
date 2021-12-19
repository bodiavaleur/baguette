import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DictionaryRoutes} from '~navigation/routes';
import Dictionary from '~screens/Dictionary';
import WordDetails from '~screens/WordDetails';

const Stack = createNativeStackNavigator();

const DictionaryNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={DictionaryRoutes.Dictionary} component={Dictionary} />
      <Stack.Screen
        name={DictionaryRoutes.WordDetails}
        component={WordDetails}
      />
    </Stack.Navigator>
  );
};

export default DictionaryNavigator;
