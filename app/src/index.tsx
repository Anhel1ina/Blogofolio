import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeContextProvider } from './helpers/ThemeContext';
import { AuthContextProvider } from './helpers/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { SearchTextProvider } from './helpers/SearchResultsContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeContextProvider>
          <SearchTextProvider>
            <App />
          </SearchTextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
