import React, { createContext, useState, useCallback } from 'react';

export const CategoryContext = createContext({
  categoryFilter: '',
  setCategoryFilter: () => {}
});

export const CategoryProvider = ({ children }) => {
  const [categoryFilter, setCategoryFilter] = useState('');

  // Wrap setCategoryFilter with useCallback to ensure the function reference remains stable
  const memoizedSetCategoryFilter = useCallback((category) => {
    setCategoryFilter(category);
  }, []);

  return (
    <CategoryContext.Provider value={{ categoryFilter, setCategoryFilter: memoizedSetCategoryFilter }}>
      {children}
    </CategoryContext.Provider>
  );
};
