import React, {useCallback} from 'react';
import ScreenList from '~containers/ScreenList';
import useInfinityScroll from '~hooks/useInfinityScroll';
import WordListItem from '~components/WordListItem';
import wordApi from '~services/api/word';

const {getMyWords} = wordApi.endpoints;

const MyWordsList: React.FC = () => {
  const words = useInfinityScroll(getMyWords);

  const renderWord = useCallback(
    ({item, index}) => <WordListItem word={item} index={index} />,
    [],
  );

  return (
    <ScreenList
      refreshing={words.isRefreshing}
      onRefresh={words.refreshList}
      data={words.dataset}
      renderItem={renderWord}
      keyExtractor={item => item._id}
      onEndReachedThreshold={0.2}
      onEndReached={words.loadMoreItems}
    />
  );
};

export default MyWordsList;
