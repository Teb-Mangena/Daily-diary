import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DiaryContextProvider } from './context/DiaryContext';
import { AuthContextProvider } from './context/AuthContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DiaryContextProvider>
        <App />
      </DiaryContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
