import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles';
import StatBadge from '~components/StatBadge';
import {useSelector} from 'react-redux';
import {
  getCurrentDictionary,
  getDictionaryStats,
} from '~redux/dictionary/dictionary.selectors';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import {fetchDictionaryStats} from '~redux/dictionary/dictionary.thunks';
import {theme} from '~config/theme';

const DictionaryStats: React.FC = () => {
  const dispatch = useAppDispatch();
  const dictionary = useSelector(getCurrentDictionary);
  const dictionaryStats = useSelector(getDictionaryStats);

  useEffect(() => {
    dispatch(fetchDictionaryStats());
  }, [dictionary]);

  return (
    <View style={styles.container}>
      <StatBadge label="New" count={dictionaryStats?.newCount} />
      <StatBadge label="Studying" count={dictionaryStats?.studyingCount} />
      <StatBadge label="Learned" count={dictionaryStats?.learnedCount} />
    </View>
  );
};

export default DictionaryStats;
