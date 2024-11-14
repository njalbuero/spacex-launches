import { useEffect } from 'react';

function useInfiniteScroll(listRef, hasMore, loading, loadMore) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = listRef.current;
      if (
        scrollContainer &&
        scrollContainer.scrollTop + scrollContainer.clientHeight >=
          scrollContainer.scrollHeight - 100 &&
        hasMore &&
        !loading
      ) {
        loadMore();
      }
    };

    const currentRef = listRef.current;
    currentRef.addEventListener('scroll', handleScroll);

    return () => currentRef.removeEventListener('scroll', handleScroll);
  }, [hasMore, loading, loadMore, listRef]);
}

export default useInfiniteScroll;
