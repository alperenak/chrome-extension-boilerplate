import { FC, useState } from 'react';

import logo from '../../assets/react.svg';

export const Popup: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App" style={{ height: 300, width: 300 }}>
      <header className="App-header">
        <img src={chrome.runtime.getURL(logo)} className="App-logo" alt="logo" />
        <p>Hello Vite + alperen !</p>
        <p>
          <button type="button" onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};
