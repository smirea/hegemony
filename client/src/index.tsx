// @ts-ignore
globalThis.EMOTION_RUNTIME_AUTO_LABEL = true;

import React from 'react';
import ReactDOM from 'react-dom/client';

import './fonts.sass';
import './global.sass';
import App from './App';

const rootEl = document.getElementById('root');
if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
}
