import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './routes/root.jsx';
import Research from './routes/research.jsx';
import Category from './routes/category.jsx';
import Film from './routes/film.jsx';
import Profil from './routes/profil.jsx';
import About from './routes/about.jsx';
import ErrorPage from './ui/ErrorPage';

import './index.css';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/research',
    element: <Research />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/category/:categoryId',
    element: <Category />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/film/:movieId',
    element: <Film />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/profil',
    element: <Profil />,
    errorElement: <ErrorPage />,
  }
]);

const rootElement = document.querySelector('#root');

if (rootElement) {
  ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
} else {
  console.error('No root element found');
}