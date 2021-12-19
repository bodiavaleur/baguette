import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Layout from '~containers/Layout';
import MenuBox from '~components/MenuBox';
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';
import {TrainingRoutes} from '~navigation/routes';

interface MenuProps {}

const Menu: React.FC<MenuProps> = ({}) => {
  const navigation = useAppNavigation();

  const navigateToFlashcards = () => {
    navigation.navigate(TrainingRoutes.Flashcards);
  };

  return (
    <Layout>
      <MenuBox title="Flashcards" onPress={navigateToFlashcards} />
    </Layout>
  );
};

export default Menu;
