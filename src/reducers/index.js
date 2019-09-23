// rootReducer.js
import { combineReducers } from 'redux';
import counterReducer from './counter';
import {headerReducer} from './header';

// Use ES6 object literal shorthand syntax to define the object shape
export const rootReducer = combineReducers({
    counterReducer,
     headerReducer
})
