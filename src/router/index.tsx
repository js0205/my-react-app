import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Login = lazy(() => import('@/pages/login'));
const Dashboard = lazy(() => import('@/pages/dashboard'));

const constantRoutes = [
  {
    path: '/login',
    element: <Login />,
  },
]

const asyncRoutes = [
  {
    path: '/',
    element: <Dashboard />
  },
]

const routes = createBrowserRouter([...constantRoutes, ...asyncRoutes]);

export default routes;