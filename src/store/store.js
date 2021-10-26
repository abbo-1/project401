import React, { createContext, useContext, useReducer } from 'react';

const StoreContext = createContext();
const initialState = {layout = <img src={titanic} id="shipLayout" alt="ship blueprint"/> }

const reducer = (state, action) => {
    switch(action.type) {
        case "elevenForty":
            return {
                map: {layout = <img src={titanic1140} id="shipLayout" alt="ship blueprint"/> },
                time: "11:40 pm",
                date: "April 14th, 1912"                
            }
        case "elevenFifty":
            return {
                 map: {layout = <img src={titanic1140} id="shipLayout" alt="ship blueprint"/> },
                time: "11:50 pm",
                date: "April 14th, 1912"                
            }
    }
}