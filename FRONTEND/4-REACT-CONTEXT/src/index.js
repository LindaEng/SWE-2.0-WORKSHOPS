import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
//import CountProvider

const container = document.getElementById('root');
const root = createRoot(container);

//add countProvider
root.render(
    <App />
);
