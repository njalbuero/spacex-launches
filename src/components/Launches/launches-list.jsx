import React, { useRef } from "react";
import LaunchItem from "./launch-item";
import Spinner from "../Spinner/spinner";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import useLaunches from "../../hooks/useLaunches";
import useFilteredLaunches from "../../hooks/useFilteredLaunches";

function LaunchesList({ searchQuery, statusFilter }) {
  const { launches, loading, hasMore, loadMore, error } = useLaunches();
  const listRef = useRef();
  const dataLoaded = launches.length > 0;
  const filteredLaunches = useFilteredLaunches(
    launches,
    searchQuery,
    statusFilter
  );

  const handleRetry = () => {
    loadMore();
  };

  // Infinite scroll event listener
  useInfiniteScroll(listRef, hasMore, loading, loadMore);

  return (
    <div className="launch__list" ref={listRef}>
      {dataLoaded && (
        <>
          {filteredLaunches.length > 0 ? (
            filteredLaunches.map((launch) => (
              <LaunchItem
                key={`${launch.flight_number}_${launch.mission_name}`}
                launch={launch}
              />
            ))
          ) : (
            <p className="no-content">No matching launches found</p>
          )}
        </>
      )}

      {loading && <Spinner />}
      {!hasMore && !loading && <div className="max-reached">End of list.</div>}

      {error && (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={handleRetry} className="retry-button">
            Retry
          </button>
        </div>
      )}
    </div>
  );
}

export default LaunchesList;
