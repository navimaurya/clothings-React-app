import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middleware = [thunk]

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger)
}


const store = createStore(rootReducer, applyMiddleware(...middleware));

export const persiststore = persistStore(store)

export default store;