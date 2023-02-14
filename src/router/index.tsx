import { lazy } from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));

const routes: Array<RouteObject> = [
  {
    path: '',
    element: <Home />,
  },
];

const router = createBrowserRouter(routes);

export default function Router() {
  return <RouterProvider router={router} />;
}
