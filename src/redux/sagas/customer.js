import { all, takeLatest, put, fork, call } from 'redux-saga/effects';
import { message } from 'antd';

import { customerActionTypes } from '../actionTypes';
import { CutomerService } from '../../services';
import {
    getCustomersSuccess,
    getCustomersFailure,
    approveCustomerSuccess,
    approveCustomerFailure
} from '../actions';

function* getCustomers() {
    yield takeLatest(customerActionTypes.GET_CUSTOMERS, function* ({ payload }) {
        try {
            const {status, customers} = yield call(CutomerService.getCustomers, payload);
            if (status === 'ERROR') {
                throw Error();
            }
            yield put(getCustomersSuccess(customers));
        } catch {
            const errorMessage = 'Failed to Sign In';
            message.error(errorMessage);
            yield put(getCustomersFailure(errorMessage));
        }
    });
}

function* approveCustomer() {
    yield takeLatest(customerActionTypes.APPROVE_CUSTOMER, function* ({ payload }) {
        try {
            const res = yield call(CutomerService.approveCustomer, payload);
            if (res.status === 'ERROR') {
                throw Error();
            }
            yield put(approveCustomerSuccess(res.customer));
        } catch {
            const errorMessage = 'Failed to Sign In';
            message.error(errorMessage);
            yield put(approveCustomerFailure(errorMessage));
        }
    });
}

export default function* customerSaga() {
    yield all([
        fork(getCustomers),
        fork(approveCustomer),
    ]);
}
