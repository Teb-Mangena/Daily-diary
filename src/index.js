import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DiaryContextProvider } from './context/DiaryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DiaryContextProvider>
      <App />
    </DiaryContextProvider>
  </React.StrictMode>
);
