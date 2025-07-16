import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router';
import './index.css';
import App from './App.tsx';
import ReactQueryProvider from './providers/reactQueryProvider.tsx';
import {AppProvider} from './providers/userAppProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactQueryProvider>
      <AppProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppProvider>
    </ReactQueryProvider>
  </StrictMode>,
);
