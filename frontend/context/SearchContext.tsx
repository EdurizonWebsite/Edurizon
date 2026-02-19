import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface SearchContextType {
  searchQuery: string;
  debouncedSearchQuery: string;
  setSearchQuery: (query: string) => void;
  clearSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

/**
 * SearchProvider - Global search context provider
 * 
 * Provides a global search query state that can be accessed from any component.
 * Includes debouncing (300ms) to optimize performance during typing.
 * 
 * Usage:
 * ```tsx
 * const { searchQuery, debouncedSearchQuery, setSearchQuery, clearSearch } = useSearch();
 * ```
 */
export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQueryState] = useState<string>('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState<string>('');

  // Debounce search query with 300ms delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Clear search function
  const clearSearch = useCallback(() => {
    setSearchQueryState('');
    setDebouncedSearchQuery('');
  }, []);

  // Wrapper to update search query
  const setSearchQuery = useCallback((query: string) => {
    setSearchQueryState(query);
  }, []);

  const value: SearchContextType = {
    searchQuery,
    debouncedSearchQuery,
    setSearchQuery,
    clearSearch,
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

/**
 * useSearch - Hook to access global search context
 * 
 * @returns SearchContextType with searchQuery, debouncedSearchQuery, setSearchQuery, and clearSearch
 * @throws Error if used outside SearchProvider
 */
export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

