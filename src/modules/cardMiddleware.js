import { addCardAction, failureAction } from '../actions';

export const cardMiddleware = (store) => (next) => (action) => {
  if (action.type === addCardAction.toString()) {
    fetch('https://loft-taxi.glitch.me/card', {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({
        cardNumber: action.payload.number,
        expiryDate: action.payload.date,
        cardName: action.payload.name,
        cvc: action.payload.cvc,
        token: 'AUTH_TOKEN' }) })
      .then((response) => response.json())
      .then(() => store.dispatch(action.payload))
      .catch((error) => failureAction(error));
  }
  return next(action);
};