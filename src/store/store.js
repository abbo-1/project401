// import {createStore, applyMiddleware} from "redux"
// import reducers from "./reducers/reducerIndex.js"
// import thunk from "redux-thunk"

// export const store = createStore(
//     reducers,
//     {},
//     applyMiddleware(thunk)
// )

import { createStore, combineReducers } from "redux";
import mainAppReducer from "./reducers/reducers.js"

const reducers = combineReducers({ mainAppReducer });

export default createStore(reducers);