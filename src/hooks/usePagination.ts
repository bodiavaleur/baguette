import {useState} from 'react';
import {PAGINATION_MIN_PAGE} from '~config/pagination';

function usePagination() {
  const [page, setPage] = useState(PAGINATION_MIN_PAGE);

  const nextPage = () => setPage(prevPage => prevPage + 1);
  const resetPage = () => setPage(PAGINATION_MIN_PAGE);

  return {page, nextPage, resetPage};
}

export default usePagination;
