import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages/main';
import { Layout } from '../widgets/layout';

export enum ROUTES_PATHS {
  ROOT = '/',
}

export const browserRouter = createBrowserRouter([
  {
    id: 'root',
    path: ROUTES_PATHS.ROOT,
    Component: Layout,
    children: [
      {
        index: true,
        Component: MainPage,
      },
    ],
  },
]);
