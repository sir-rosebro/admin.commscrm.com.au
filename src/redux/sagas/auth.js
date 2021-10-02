import { all, takeLatest, put, fork, call } from 'redux-saga/effects';
import { message } from 'antd';

import { authActionTypes } from '../actionTypes';
import { AuthService } from '../../services';
import {
    signInSuccess,
    signInFail,
    forgotPasswordSuccess,
    forgotPasswordFail,
    resetPasswordSuccess,
    resetPasswordFail
} from '../actions';

function* signIn() {
    yield takeLatest(authActionTypes.SIGN_IN, function* ({ payload }) {
        try {
            const {status, user} = yield call(AuthService.signIn, payload);
            if (status === 'ERROR') {
                throw Error();
            }
            yield put(signInSuccess(user));
        } catch {
            const errorMessage = 'Failed to Sign In';
            message.error(errorMessage);
            yield put(signInFail(errorMessage));
        }
    });
}


function* forgotPassword() {
    yield takeLatest(authActionTypes.FORGOT_PASSWORD, function* ({ payload }) {
        try {
            console.log(payload);
            const { status, message } = yield call(AuthService.forgotPassword, payload);
            if (status === 'ERROR') {
                throw Error();
            }
            yield put(forgotPasswordSuccess(message));
        } catch {
            const errorMessage = message;
            message.error(errorMessage);
            yield put(forgotPasswordFail(message));
        }
    });
}

function* resetPassword() {
    yield takeLatest(authActionTypes.RESET_PASSWORD, function* ({ payload }) {
        try {
            const { status, message } = yield call(AuthService.resetPassword, payload);
            if (status === 'ERROR') {
                yield put(resetPasswordFail(message));
               // throw Error();
            }
            yield put(resetPasswordSuccess(message));
        } catch {
            const errorMessage = message;
            message.error(errorMessage);
            yield put(resetPasswordFail(message));
        }
    });
}

export default function* authSaga() {
    yield all([fork(signIn), fork(forgotPassword), fork(resetPassword)]);
}
