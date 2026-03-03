import { createContext, useContext } from 'react';

export const LoadingContext = createContext({
  pageReady: false,
  setPageReady: () => { },
});

export const usePageLoading = () => useContext(LoadingContext);
