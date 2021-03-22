import { takeEvery, call, put } from "redux-saga/effects";

import * as api from "./api";

import { sendAuthRequest, sendAuthSuccess, sendAuthFailure, logout, sendRegisterFailure, sendRegisterSuccess, sendRegisterRequest } from "./actions";

export function* sendAuthRequestSaga(action) {
	try {
		const response = yield call(api.postAuthRequest, action.payload);
		yield call(api.saveToken, response.token);
		yield put(sendAuthSuccess());
	} catch (error) {
		yield put(sendAuthFailure(error));
	}
}

export function* authSaga() {
	yield takeEvery(sendAuthRequest, sendAuthRequestSaga);
	yield takeEvery(logout, function() {
		window.localStorage.removeItem("token");
	});
}

export function* sendRegisterRequestSaga(action) {
	try {
		const response = yield call(api.postRegisterRequest, action.payload);
		yield call(api.saveToken, response.token);
		yield put(sendRegisterSuccess());
	} catch (error) {
		yield put(sendRegisterFailure(error));
		console.log(error);
	}
}

export function* registerSaga() {
	yield takeEvery(sendRegisterRequest, sendRegisterRequestSaga);
	yield takeEvery(logout, function() {
		window.localStorage.removeItem("token");
	});
}