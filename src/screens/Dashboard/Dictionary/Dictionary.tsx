import React, {useCallback} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import styles from './styles';
import Layout from '~containers/Layout/Layout';
import WordListItem from '~components/WordListItem';

const Dictionary: React.FC = () => {
  const renderWord = useCallback(
    ({item}): ListRenderItem<any> => <WordListItem word={item} />,
    [],
  );

  return (
    <Layout withoutPaddings>
      <FlatList
        style={styles.container}
        data={[1, 2, 3, 4, 5]}
        renderItem={renderWord}
      />
    </Layout>
  );
};

export default Dictionary;
