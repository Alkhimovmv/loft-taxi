import { createAction } from 'redux-actions';

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const AUTHENTICATE = 'AUTHENTICATE'

export const logIn = () => ({type: LOG_IN})
export const logOut = () => ({type: LOG_OUT})
export const authenticate = (email, password) => ({type: AUTHENTICATE, payload: {email, password}})

export const addCardAction = createAction('ADD_CARD')
export const failureAction = createAction('FAILURE')