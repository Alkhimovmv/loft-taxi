import { addCardAction, failureAction, addCardSuccess } from '../actions';

export const cardMiddleware = (store) => (next) => (action) => {
  const { auth: { token } } = store.getState();
  if (action.type === addCardAction.toString()) {
    fetch('https://loft-taxi.glitch.me/card', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cardNumber: action.payload.number,
        expiryDate: action.payload.date,
        cardName: action.payload.name,
        cvc: action.payload.cvc,
        token }) })
    .then((response) => response.json())
    .then(data => {
      if (!data.success) {
        throw Error(data.error);
      } else {
        store.dispatch(addCardSuccess());
      }
    })
    .catch((error) => {
      failureAction(error.message)
    });
  }
  return next(action);
};