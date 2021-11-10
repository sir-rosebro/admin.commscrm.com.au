import { all, takeLatest, put, fork, call } from 'redux-saga/effects';
import { message } from 'antd';

import { customerActionTypes } from '../actionTypes';
import { CutomerService } from '../../services';
import {
    getCustomersSuccess,
    getCustomersFailure,

    approveCustomerSuccess,
    approveCustomerFailure,

    createCustomerSuccess,
    createCustomerFailure,

    deleteCustomerSuccess,
    deleteCustomerFailure,

    updateCustomerSuccess,
    updateCustomerFailure

} from '../actions';

function* getCustomers() {
    yield takeLatest(customerActionTypes.GET_CUSTOMERS, function* ({ payload }) {
        console.log(payload);
        try {
            const {status, customers, pagination} = yield call(CutomerService.getCustomers, payload);
            if (status === 'ERROR') {
                throw Error();
            }
            yield put(getCustomersSuccess({customers, pagination}));
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
            console.log(res);
            if (res.status === 'ERROR') {
                throw Error(res.message);
            }
            yield put(approveCustomerSuccess(res.customerId));
        } catch(e) {
            const errorMessage = e.message || 'Customer can not be approved right now.';
            message.error(errorMessage);
            yield put(approveCustomerFailure(errorMessage));
        }
    });
}

function* createCustomer() {
    yield takeLatest(customerActionTypes.CREATE_CUSTOMER, function* ({ payload }) {
        try {
            const {status, user, message} = yield call(CutomerService.createCustomer, payload);
            if (status === 'ERROR') {
                throw Error(message);
            }
            yield put(createCustomerSuccess(user));
        } catch (e) {
            const errorMessage = e.message || 'Failed to create Customer.';
            message.error(errorMessage);
            yield put(createCustomerFailure(errorMessage));
        }
    });
}

function* deleteCustomer() {
    yield takeLatest(customerActionTypes.DELETE_CUSTOMER, function* ({ payload }) {
        try {
            const {status, customerId} = yield call(CutomerService.deleteCustomer, payload);
            if (status === 'ERROR') {
                throw Error();
            }
            yield put(deleteCustomerSuccess(customerId));
        } catch {
            const errorMessage = 'Failed to Sign In';
            message.error(errorMessage);
            yield put(deleteCustomerFailure(errorMessage));
        }
    });
}

function* updateCustomer() {
    yield takeLatest(customerActionTypes.UPDATE_CUSTOMER, function* ({ payload }) {
        try {
            const {status, user} = yield call(CutomerService.updateCustomer, payload);
            if (status === 'ERROR') {
                throw Error();
            }
            yield put(updateCustomerSuccess(user));
        } catch {
            const errorMessage = 'Failed to upddate customer.';
            message.error(errorMessage);
            yield put(updateCustomerFailure(errorMessage));
        }
    });
}

export default function* customerSaga() {
    yield all([
        fork(getCustomers),
        fork(approveCustomer),
        fork(createCustomer),
        fork(deleteCustomer),
        fork(updateCustomer)
    ]);
}
