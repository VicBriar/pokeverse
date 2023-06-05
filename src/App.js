import React from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

import {Layout} from './routes/Layout';
import {Home} from './routes/Home'
import {PokeDetails} from './routes/PokeDetails'

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
        element: <p>favorites</p>
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
