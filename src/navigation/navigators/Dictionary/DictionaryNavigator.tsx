import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DictionaryRoutes} from '~navigation/routes';
import Dictionary from '~screens/Dictionaries/Dictionary';
import MyDictionaries from '~screens/Dictionaries/MyDictionaries';
import NewDictionary from '~screens/Dictionaries/NewDictionary';
import WordNavigator from '~navigation/navigators/Word';
import MyWords from '~screens/Dictionaries/MyWords';

const Stack = createNativeStackNavigator();

const DictionaryNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen
          name={DictionaryRoutes.MyDictionaries}
          component={MyDictionaries}
        />
        <Stack.Screen name={DictionaryRoutes.MyWords} component={MyWords} />
        <Stack.Screen
          name={DictionaryRoutes.Dictionary}
          component={Dictionary}
        />
        <Stack.Screen
          name={DictionaryRoutes.NewDictionary}
          component={NewDictionary}
        />
      </Stack.Group>

      <Stack.Screen
        name={DictionaryRoutes.WordDetails}
        component={WordNavigator}
      />
    </Stack.Navigator>
  );
};

export default DictionaryNavigator;
