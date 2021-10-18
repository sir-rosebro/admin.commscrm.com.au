// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import Auth from './auth';
import Customer from './customer';
import UI from './ui';

const reducers = combineReducers({
    auth: Auth,
    customer:Customer,
    ui:UI
});
export default reducers;