import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { authMiddleware } from './modules/authMiddleware';
import { cardMiddleware } from './modules/cardMiddleware';

export const store = createStore(
    rootReducer, 
    compose(
        applyMiddleware(cardMiddleware),
        applyMiddleware(authMiddleware)
    ),
);