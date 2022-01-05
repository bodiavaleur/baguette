import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WordRoutes} from '~navigation/routes';
import WordDetails from '~screens/Word/WordDetails';
import EditWord from '~screens/Word/EditWord';

const Stack = createNativeStackNavigator();

const WordNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={WordRoutes.Word} component={WordDetails} />
      <Stack.Screen name={WordRoutes.EditWord} component={EditWord} />
    </Stack.Navigator>
  );
};

export default WordNavigator;
