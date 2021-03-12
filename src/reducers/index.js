import { combineReducers } from 'redux'
import auth from './auth'
import card from './rootRedusers'

export default combineReducers({auth, card})