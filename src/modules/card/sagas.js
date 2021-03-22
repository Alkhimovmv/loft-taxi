import { takeEvery, call, put, fork } from "redux-saga/effects";
import * as api from "./api";
import { sendCardRequest, sendCardSuccess, sendCardFailure, fetchCardRequest, fetchCardSuccess, fetchCardFailure } from "./actions";

export function* sendCardRequestSaga(action) {
	try {
		yield call(api.postCardRequest, action);
		yield put(sendCardSuccess(action.payload));
	} catch (error) {
		yield put(sendCardFailure(error));
	}
}

export function* fetchCardRequestSaga() {
	try {
		const response = yield call(api.getCardRequest);
		yield put(fetchCardSuccess(response));
	} catch (error) {
		yield put(fetchCardFailure(error));
	}
}

export function* sendCard() {
	yield takeEvery(sendCardRequest, sendCardRequestSaga);
}

export function* fetchCard() {
	yield takeEvery(fetchCardRequest, fetchCardRequestSaga);
}

export function* paymentSaga() {
	yield fork(sendCard);
	yield fork(fetchCard);
}