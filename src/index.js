import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContextProvider } from './stores/context';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './stores/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
  <ContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </ContextProvider>
  </AuthContextProvider>
);
