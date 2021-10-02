// src/redux/sagas/index.js
import { all } from 'redux-saga/effects';

import Auth from './auth';
import Customer from './customer';

export default function* rootSaga() {
    yield all([
        Auth(),
        Customer()
    ]);
}