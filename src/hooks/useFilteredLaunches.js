import { useMemo } from "react";

function useFilteredLaunches(launches, searchQuery, statusFilter) {
  return useMemo(() => {
    return launches.filter((launch) => {
      const matchesSearchQuery = launch.mission_name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesStatusFilter =
        statusFilter === "All" || launch.status === statusFilter;

      return matchesSearchQuery && matchesStatusFilter;
    });
  }, [launches, searchQuery, statusFilter]);
}

export default useFilteredLaunches;
