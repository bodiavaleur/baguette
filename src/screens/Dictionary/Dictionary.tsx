import React, {useCallback} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import styles from './styles';
import Layout from '~containers/Layout/Layout';
import WordListItem from '~components/WordListItem';
import {useAppNavigation} from '~hooks/navigation/useAppNavigation';
import {DictionaryRoutes} from '~navigation/routes';

const Dictionary: React.FC = () => {
  const navigation = useAppNavigation();

  const openWordDetails = (word: string) =>
    navigation.navigate(DictionaryRoutes.WordDetails, {word});

  const renderWord = useCallback(
    ({item}): ListRenderItem<string> => (
      <WordListItem word={item} onPress={() => openWordDetails(item)} />
    ),
    [],
  );

  return (
    <Layout withoutPaddings>
      <FlatList
        style={styles.container}
        data={['Bonjour', 'Musique', 'Fenêtre', 'Livre', 'Bonne nuit']}
        renderItem={renderWord}
      />
    </Layout>
  );
};

export default Dictionary;
