import { failureAction, addCardAction, addCardSuccess } from './actions.js';

export const INIT_STATE = {
  authed: !!localStorage.getItem('user'),
  card: {
    number: '',
    name: '',
    date: '',
    cvc: ''
  },
  cardIsExist: false,
  error: false,
};

export const rootReducer = (state = INIT_STATE, action) => {
  const { auth: { token } } = store.getState();
  switch (action.type) {
    case addCardAction.toString():
      return { ...state,
        card: {
          number: action.payload.number,
          name: action.payload.name,
          date: action.payload.date,
          cvc: action.payload.cvc,
          token
        },
      };
    case addCardSuccess.toString():
      return { ...state,
        cardIsExist: true,
      };
    case failureAction.toString():
      return { ...state,
        error: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;