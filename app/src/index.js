import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataProvider } from './state/dataContext.jsx'; // Import DataProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider> {/* Wrap App with DataProvider */}
      <App />
    </DataProvider>
  </React.StrictMode>
);

reportWebVitals();
