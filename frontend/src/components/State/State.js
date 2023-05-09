import React, { useEffect, useContext } from 'react';
import { Router, RouterProvider } from "react-router-dom";

import router from 'router';
import AppContext from 'context';

function State() {
  const [context, setContext] = React.useState({
    fruit: 'apple',
    vegetable: 'bhindi'
  });
  const value = { context, setContext };

  return (
    <AppContext.Provider value={value}>
      <RouterProvider router={router}>
      </RouterProvider>
    </AppContext.Provider>
  );
}

export default State;
