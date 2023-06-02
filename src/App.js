import React from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

import {Layout} from './routes/Layout';
import {Home} from './routes/Home'
import {PokeDetails} from './routes/PokeDetails'


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
      }
    ],
  }]);

  return(
    <RouterProvider router={router} />
  );
}

export { App };
