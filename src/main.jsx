import React from 'react';
import ReactDOM from 'react-dom/client';  // For React 18 and above
import WelcomePage from './welcome'; // <-- Ensure this import is correct
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);