import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom"
import  store  from '../src/redux/store';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
  </BrowserRouter>
// </React.StrictMode>,
);
