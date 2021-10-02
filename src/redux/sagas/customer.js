import { all, takeLatest, put, fork, call } from 'redux-saga/effects';
import { message } from 'antd';

import { customerActionTypes } from '../actionTypes';
import { CutomerService } from '../../services';
import {
    getCustomersSuccess,
    getCustomersFailure,
} from '../actions';

function* getCustomers() {
    yield takeLatest(customerActionTypes.GET_CUSTOMERS, function* ({ payload }) {
        try {
            const res = yield call(CutomerService.getCustomers, payload);
            console.log(res);
            if (res.status === 'ERROR') {
                throw Error();
            }
            yield put(getCustomersSuccess(res.customers));
        } catch {
            const errorMessage = 'Failed to Sign In';
            message.error(errorMessage);
            yield put(getCustomersFailure(errorMessage));
        }
    });
}

export default function* customerSaga() {
    yield all([fork(getCustomers)]);
}
