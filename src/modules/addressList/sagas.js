import { takeEvery, call, put } from "redux-saga/effects";
import * as api from "./api";
import { fetchAddressRequest, fetchAddressSuccess, fetchAddressFailure } from "./actions";

export function* fetchAddressRequestSaga() {
	try {
		let response = yield call(api.getAddressRequest);
		yield put(fetchAddressSuccess(response.addresses));
	} catch (error) {
		yield put(fetchAddressFailure(error));
	}
}

export function* addressSaga() {
	yield takeEvery(fetchAddressRequest, fetchAddressRequestSaga);
}
