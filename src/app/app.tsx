import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { socket } from './api';
import { browserRouter } from './routes';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    socket.createConnection().then(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>LOADING...</div>;
  }

  return <RouterProvider router={browserRouter} />;
};
