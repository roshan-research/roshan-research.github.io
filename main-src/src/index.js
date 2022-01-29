import React from 'react';
import './index.css';
import App from './App';
import { loadComponents, getState } from "loadable-components";

import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
window.snapSaveState = () => getState();

loadComponents()
    .then(() => hydrate(<App />, rootElement))
    .catch(() => render(<App />, rootElement));
