import React, { useState, useEffect } from 'react';
import './App.css';
import ScrollContainer from 'react-indiana-drag-scroll';

import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider, connect} from 'react-redux'

import { increment, decrement } from './actions/displayPassengerLists'

// import thunk from 'redux-thunk'
// import {composeWithDevTools} from 'redux-devtools-extension'

import titanic from './images/titanic2.png';

import reducer from './reducers/passengerList.js'
import displayPassengers from './actions/displayPassengerLists'

function App(props) {

const [showMessage, setMessageOff] = useState(false);

// const counter = 1

const initialState = {
  counter: 0,
}

  return (
    <div className="App">
      <ScrollContainer className="scroll-container">
      {/* <header className="App-header"> */}
      {/* {message} */}
      {showMessage ? (<div id='welcomeMessage'>
        In the early hours of April 15th 1912, The RMS Titanic sank beneath the waves. From the time of collision at 11:45 PM, until the ship's last moments, a courageous few worked tirelessly to launch lifeboats. 
        <br/><br/>  
        By the end of the night only 712 people, less then 1/3rd of those who were on board, survived. 
        <br/> <br/> 
        Click on a lifeboat to learn more about each boat's survivors.
        <br/>  
        <button onClick={() => setMessageOff(null)} 
        id="exploreBtn">
        Explore
        </button>

        </div>) : true}

        <img src={titanic} id="shipLayout" alt="ship blueprint"/>
         {/* Click on a lifeboat to see who was on board. */}

         {/* <button onClick={props.displayPassengers}>Lifeboat #1</button> */}
         {/* <button class="lifeboatBtn" onClick={thin()}>Lifeboat #1</button> */}

      {/* </header> */} 
      </ScrollContainer>
    </div>
  );
}

export default connect()(App);

