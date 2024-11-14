// store.js
import create from "zustand";

export const useLaunchStore = create((set) => ({
  launches: [],
  loading: false,
  hasMore: true,
  dataLoaded: false,
  offset: 0,

  // Set launches data
  setLaunches: (data) =>
    set((state) => ({ launches: [...state.launches, ...data] })),

  // Set loading state
  setLoading: (loading) => set({ loading }),

  // Set hasMore state
  setHasMore: (hasMore) => set({ hasMore }),

  // Set dataLoaded state
  setDataLoaded: (loaded) => set({ dataLoaded: loaded }),

  // Set offset for pagination
  setOffset: (offset) => set({ offset }),
}));
