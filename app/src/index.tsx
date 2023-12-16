import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { SearchTextProvider } from './helpers/SearchResultsContext';
import { Provider } from 'react-redux';
import { appStore } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Provider store={appStore}>

            <SearchTextProvider>
              <App />
            </SearchTextProvider>

      </Provider>

    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
