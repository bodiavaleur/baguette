import {useEffect, useState} from 'react';
import {Pagination} from '~types/pagination';
import usePagination from '~hooks/usePagination';
import usePullToRefresh from '~hooks/usePullToRefresh';

// TODO: add types for arguments
// endpoint - rtk query endpoint
// args - query arguments for given endpoint
function useInfinityScroll(endpoint: any, args?: any) {
  const [dataset, setDataset] = useState<Pagination<any>[]>([]);
  const pagination = usePagination();
  const refresh = usePullToRefresh();
  const query = endpoint.useQuery({page: pagination.page, ...(args ?? {})});

  useEffect(() => {
    refresh.hide();

    if (query.data?.docs) {
      const {hasPrevPage, docs} = query.data;
      const needReplaceDataset = !hasPrevPage;

      if (needReplaceDataset) {
        setDataset(docs);
      } else {
        setDataset(prevState => [...prevState, ...docs]);
      }
    }
  }, [query.data]);

  const refreshList = () => {
    refresh.show();
    pagination.resetPage();
    query.refetch();
  };

  const loadMoreItems = () => {
    if (query.data?.hasNextPage) {
      pagination.nextPage();
    }
  };

  const isRefreshing = refresh.refreshing && query.isLoading;

  return {
    dataset,
    isRefreshing,
    refreshList,
    loadMoreItems,
    refetch: query.refetch,
  };
}

export default useInfinityScroll;
