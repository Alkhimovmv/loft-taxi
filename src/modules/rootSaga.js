import { fork } from "redux-saga/effects";
import { authSaga, registerSaga } from "./authAndRegister/sagas";
import { paymentSaga } from "./card/sagas";
import { addressSaga } from "./addressList/sagas";
import { routeSaga } from "./route/sagas";

export function* rootSaga() {
	yield fork(authSaga);
	yield fork(registerSaga);
	yield fork(paymentSaga);
	yield fork(addressSaga);
	yield fork(routeSaga);
}