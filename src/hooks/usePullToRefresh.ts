import {useState} from 'react';

function usePullToRefresh() {
  const [refreshing, setRefreshing] = useState(false);

  const show = () => setRefreshing(true);
  const hide = () => setRefreshing(false);

  return {refreshing, show, hide};
}

export default usePullToRefresh;
