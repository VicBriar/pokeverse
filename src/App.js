import React from 'react';
import {createBrowserRouter,RouterProvider, BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {Layout} from './routes/Layout';
import {Home} from './routes/Home'
import {PokeDetails} from './routes/PokeDetails'
import { Favorites } from './routes/Favorites';

import FavoritesProvider from '../FavoritesProvider';


function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/:name",
        element: <PokeDetails/>
      },
      {
        path: "/favorites",
        element: <Favorites />
      }
    ],
  }]);

  return(
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  );
}

export { App };
