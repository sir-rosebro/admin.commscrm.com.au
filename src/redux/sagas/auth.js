// src/redux/sagas/App.js
import { all, takeLatest, put, fork, call } from 'redux-saga/effects';

import {authActionTypes} from '../actionTypes';
import { AuthService } from '../../services';
import {
    signInSuccess,
    signInFail
}
from '../actions';

function* signIn() {
    yield takeLatest(authActionTypes.SIGN_IN, function*({payload}) {
        try{
            const {data:{status, user}} = yield call(AuthService.signIn, payload);
            if(status === 'ERROR') {
                throw Error();
            }
            yield put(signInSuccess(user));
        }
        catch {
            yield put(signInFail('Failed to Sign In'))
        }
    })
}

export default function* authSaga() {
    yield all([
        fork(signIn)
    ]);
}