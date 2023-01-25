import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from './Context/UserContext';
import { ThemeProvider } from './Context/ThemeContext';

import './styles/global.css';
import './styles/new.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <ThemeProvider>
      <App /> 
      </ThemeProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
