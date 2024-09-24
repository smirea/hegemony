// @ts-ignore
globalThis.EMOTION_RUNTIME_AUTO_LABEL = true;

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './fonts.sass';
import './global.sass';

const rootEl = document.getElementById('root');
if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
}
