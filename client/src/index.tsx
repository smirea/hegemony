// @ts-ignore
globalThis.EMOTION_RUNTIME_AUTO_LABEL = true;

import React from 'react';
import ReactDOM from 'react-dom/client';

import './fonts.css';
import './global.sass';
import App from './App';
import { defineColors } from './utils/colors';

const rootEl = document.getElementById('root');
if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    defineColors();
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
}
