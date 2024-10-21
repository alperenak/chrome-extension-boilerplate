import React from 'react';

import ReactDOM from 'react-dom/client';

import { ContentScript } from './app';

const index = document.createElement('div');
index.id = 'content-script';
document.body.appendChild(index);

ReactDOM.createRoot(index).render(
  <React.StrictMode>
    <ContentScript />
  </React.StrictMode>,
);
