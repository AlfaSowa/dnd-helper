import { RouterProvider } from 'react-router-dom';
import { browserRouter } from './routes';

export const App = () => {
  return <RouterProvider router={browserRouter} />;
};
