import { combineReducers } from "redux"
import infoReducer from "./infoReducer.js"

const reducers = combineReducers({ 
    info : infoReducer 
    }
)

export default reducers