import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NavigationProvider } from './context/navigation';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
