import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from './ui/UserContext';

import Root from './routes/root.jsx';
import Login from './routes/login.jsx';
import Logout from './routes/logout.jsx';
import Register from './routes/register.jsx';
import RegisterConfirm from './routes/registerconfirm.jsx';
import Dashboard from './routes/dashboard.jsx';
import App from './App.jsx';
import ErrorPage from './ui/ErrorPage';

import Reward from "./ui/DashboardPage/reward.jsx";

import './sass/css/style.css';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/logout',
    element: <Logout />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/registerconfirm/:UserMail/:UserPwdHash/:UserReglement/:UserNewsletter',
    element: <RegisterConfirm />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/test',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboard/account',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboard/reward',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  }
]);

const rootElement = document.querySelector('#root');

if (rootElement) {
  ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </React.StrictMode>,
  )
} else {
  console.error('No root element found');
}