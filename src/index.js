import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
// const root = ReactDOM.createRoot(document.getElementById('root'));
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
reportWebVitals();
