import React, { createContext, useState } from 'react';

export const TabFocusContext = createContext();

export const TabFocusProvider = ({ children }) => {
  const [focusedTab, setFocusedTab] = useState(null);

  return (
    <TabFocusContext.Provider value={{ focusedTab, setFocusedTab }}>
      {children}
    </TabFocusContext.Provider>
  );
};
