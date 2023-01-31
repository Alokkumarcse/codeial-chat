import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './components/App';
import { configureStore } from './store'; // by default import index.js file from store folder

/** invoke the configureStore to create store */
const store = configureStore();
console.log(store);
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
