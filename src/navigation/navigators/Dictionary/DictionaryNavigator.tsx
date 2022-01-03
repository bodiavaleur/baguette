import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DictionaryRoutes} from '~navigation/routes';
import Dictionary from '~screens/Dictionaries/Dictionary';
import WordDetails from '~screens/WordDetails';
import MyDictionaries from '~screens/Dictionaries/MyDictionaries';
import NewDictionary from '~screens/Dictionaries/NewDictionary';

const Stack = createNativeStackNavigator();

const DictionaryNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={DictionaryRoutes.MyDictionaries}
        component={MyDictionaries}
      />
      <Stack.Screen name={DictionaryRoutes.Dictionary} component={Dictionary} />
      <Stack.Screen
        name={DictionaryRoutes.WordDetails}
        component={WordDetails}
      />
      <Stack.Screen
        name={DictionaryRoutes.NewDictionary}
        component={NewDictionary}
      />
    </Stack.Navigator>
  );
};

export default DictionaryNavigator;
