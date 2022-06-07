import {createStore, applyMiddleware,combineReducers} from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import usersReducers from "./reducer"

const middlewares = [reduxThunk];

const rootReducer = combineReducers({
    data: usersReducers
});

if(process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;