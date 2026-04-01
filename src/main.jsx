import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/custom.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
