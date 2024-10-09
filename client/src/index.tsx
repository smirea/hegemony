// @ts-ignore
globalThis.EMOTION_RUNTIME_AUTO_LABEL = true;

import React from 'react';
import ReactDOM from 'react-dom/client';

import './fonts.sass';
import './global.sass';
import App from './App';
import defineColors from './utils/defineColors';

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
