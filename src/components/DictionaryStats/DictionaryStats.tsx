import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import StatBadge from '~components/StatBadge';
import {useGetDictionaryStatsQuery} from '~services/api/dictionary';
import {useSelector} from 'react-redux';
import {selectCurrentDictionary} from '~redux/dictionary/dictionary.selectors';

const DictionaryStats: React.FC = () => {
  const currentDictionary = useSelector(selectCurrentDictionary);
  const dictionaryStats = useGetDictionaryStatsQuery(currentDictionary);

  return (
    <View style={styles.container}>
      <StatBadge label="New" count={dictionaryStats.data?.newCount} />
      <StatBadge label="Studying" count={dictionaryStats.data?.studyingCount} />
      <StatBadge label="Learned" count={dictionaryStats.data?.learnedCount} />
    </View>
  );
};

export default DictionaryStats;
