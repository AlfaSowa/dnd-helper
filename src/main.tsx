import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { App, configureAppStore } from './app';
import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
const store = configureAppStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
