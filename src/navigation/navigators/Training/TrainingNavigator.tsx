import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TrainingRoutes} from '~navigation/routes';
import Menu from '~screens/Training/Menu';
import Flashcards from '~screens/Training/Flashcards';

const Stack = createNativeStackNavigator();

const TrainingNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={TrainingRoutes.Menu} component={Menu} />
      <Stack.Screen name={TrainingRoutes.Flashcards} component={Flashcards} />
    </Stack.Navigator>
  );
};

export default TrainingNavigator;
