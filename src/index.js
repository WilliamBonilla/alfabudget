import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Menu from './routes/menu';
import Prueba from './routes/prueba';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './routes/login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "inicio",
    element: <Menu/>,
    children: [
      {
        path: "prueba",
        element: <Prueba/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
