import { createAction } from 'redux-actions';

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const AUTHENTICATE = 'AUTHENTICATE'

export const logIn = token => ({ type: LOG_IN, payload: token });
export const logOut = () => ({type: LOG_OUT})
export const authenticate = (email, password) => ({type: AUTHENTICATE, payload: {email, password}})

export const addCardAction = createAction('ADD_CARD')
export const addCardSuccess = createAction('SUCCESS')
export const failureAction = createAction('FAILURE')