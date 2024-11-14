import { useState, useEffect } from "react";

const useLaunches = () => {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const [error, setError] = useState(null);

  const LIMIT = 10;

  const fetchLaunches = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.spacexdata.com/v3/launches?limit=${LIMIT}&offset=${offset}&order=desc`
      );
      const data = await response.json();

      if (data.length === 0) {
        setHasMore(false);
      }

      // Add the status property to each launch
      const updatedLaunches = data.map((launch) => {
        let status;
        if (launch.upcoming) {
          status = "Upcoming";
        } else {
          status = launch.launch_success ? "Success" : "Failed";
        }

        return {
          ...launch,
          status,
        };
      });

      setLaunches((prevLaunches) => [...prevLaunches, ...updatedLaunches]);
    } catch (error) {
      console.error("Failed to fetch launches:", error);
      setError("Failed to fetch launches. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLaunches();
    // eslint-disable-next-line
  }, [offset]);

  const loadMore = () => {
    if (hasMore) {
      setOffset((prevOffset) => prevOffset + LIMIT);
    }
  };

  return { launches, loading, hasMore, loadMore, error };
};

export default useLaunches;
