
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// 使用lazy实现组件懒加载
const Login = lazy(() => import('../pages/login'));
const Dashboard = lazy(() => import('../pages/dashboard'));

const routes = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Dashboard />
  },
]);

export default routes;