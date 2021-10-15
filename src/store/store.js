import {createStore} from "redux"
import reducers from "./reducers/reducerIndex.js"

export const store = createStore(
    reducers,
    {}
)