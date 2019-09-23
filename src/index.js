import React from 'react';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import ReactDOM from 'react-dom';
import './index.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import {rootReducer} from './reducers';
import * as serviceWorker from './serviceWorker';


let store = createStore(rootReducer);
console.log(store.getState().counterReducer)
// store.subscribe(()=>{console.log(store)})
console.log(i18n)
ReactDOM.render(<Provider store={store}><I18nextProvider i18n={i18n}><App /></I18nextProvider></Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
