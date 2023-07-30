import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route} from "react-router-dom";
import Paths from "./UI/Components/Routes/Paths";
import { store } from './BLL/Store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
    </BrowserRouter>
);

