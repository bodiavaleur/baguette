import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Layout from '~containers/Layout';
import Flashcard from '~components/Flashcard';

// Mock data
const DATA = ['Bonjour', 'Musique', 'Fenêtre', 'Livre', 'Bonne nuit'];

interface FlashcardsProps {}

const Flashcards: React.FC<FlashcardsProps> = ({}) => {
  return (
    <Layout withoutPaddings>
      <View style={styles.container}>
        {DATA.map((item, index) => (
          <Flashcard key={item} title={item} index={index} />
        ))}
      </View>
    </Layout>
  );
};

export default Flashcards;
