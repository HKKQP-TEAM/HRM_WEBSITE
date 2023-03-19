import { lazy } from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import Register from '~/pages/Register';

const Home = lazy(() => import('~/pages/Home'));
const SignIn = lazy(() => import('~/pages/SignIn'));

const routes: Array<RouteObject> = [
  {
    path: '',
    element: <Home />,
  },
  {
    path: 'sign-in',
    element: <SignIn />,
  },
  {
    path: 'register',
    element: <Register />,
  },
];

const router = createBrowserRouter(routes);

export default function Router() {
  return <RouterProvider router={router} />;
}
