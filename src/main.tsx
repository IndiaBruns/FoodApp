import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const appDiv = document.querySelector<HTMLDivElement>('#app');
if (appDiv) {
  ReactDOM.createRoot(appDiv).render(
    <React.StrictMode>
      <div style={{ backgroundColor: '#FAF7F5' }}>
        <App />
      </div>
    </React.StrictMode>
  );
}
