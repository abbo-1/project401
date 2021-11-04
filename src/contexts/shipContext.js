import React, { useState, createContext } from "react"

function ShipContext( timePoint ) {
    timePoint.map(cases => {
        switch ( cases.exactTime ) {
            case "elevenForty":
                this.setState ({
                    map: {layout = <img src={titanic1140} id="shipLayout" alt="ship blueprint"/> },
                    time: "11:40 pm",
                    date: "April 14th, 1912"                
                });
                break;
            case "elevenFifty":
                this.setState ({
                    map: {layout = <img src={titanic1140} id="shipLayout" alt="ship blueprint"/> },
                    time: "11:50 pm",
                    date: "April 14th, 1912"                
                });
                break;
            default:
                this.setState ({
                    map: {layout = <img src={titanic} id="shipLayout" alt="ship blueprint"/> },
                    time: "",
                    date: ""                
                });
                break;


    }

    return (
        <>
        
        </>
    )
}

export default ShipContext = createContext;




//OLD STORE
// import React, { createContext, useContext, useReducer } from 'react';

// const StoreContext = createContext();
// const initialState = {layout = <img src={titanic} id="shipLayout" alt="ship blueprint"/> }

// const reducer = (state, action) => {
//     switch(action.type) {
//         case "elevenForty":
//             return {
//                 map: {layout = <img src={titanic1140} id="shipLayout" alt="ship blueprint"/> },
//                 time: "11:40 pm",
//                 date: "April 14th, 1912"                
//             }
//         case "elevenFifty":
//             return {
//                  map: {layout = <img src={titanic1140} id="shipLayout" alt="ship blueprint"/> },
//                 time: "11:50 pm",
//                 date: "April 14th, 1912"                
//             }
//         case "midnight":
//             return {
//                 map: {layout = <img src={titanic1140} id="shipLayout" alt="ship blueprint"/> },
//                 time: "12:00 am",
//                 date: "April 15th, 1912"                
//             }
//     }
// }