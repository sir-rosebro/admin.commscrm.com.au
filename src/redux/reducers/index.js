// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import Auth from './auth';
import Customer from './customer'

const reducers = combineReducers({
    auth: Auth,
    customer:Customer
});
export default reducers;