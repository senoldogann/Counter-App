import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Store uygulamaya bağlama
import configureStore from "./redux/reducers/configureStore";
import { Provider } from "react-redux";

// mağazayı oluşturduk
const store = configureStore();
// Provider içine aldık ve içine store'i ekeldik
ReactDOM.render(<Provider store={store}><App /> </Provider>, document.getElementById('root'));

reportWebVitals();
