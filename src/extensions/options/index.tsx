import React from 'react';

import ReactDOM from 'react-dom/client';

import { Options } from './app';

const index = document.createElement('div');
index.id = 'options';
document.body.appendChild(index);

ReactDOM.createRoot(index).render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>,
);
