import React, { useState, useEffect } from 'react';
import './App.css';
import ScrollContainer from 'react-indiana-drag-scroll';

import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider, connect} from 'react-redux'

// import thunk from 'redux-thunk'
// import {composeWithDevTools} from 'redux-devtools-extension'

import titanic from './images/titanic2.png';

import reducer from './reducers/passengerList.js'
import displayPassengers from './actions/displayPassengerLists'

function App(props) {

const [showMessage, setMessageOff] = useState(false);
const store = createStore(reducer)

increment = () => {
  this.props.dispatch({ type: 'INCREMENT' });
}

decrement = () => {
  this.props.dispatch({ type: 'DECREMENT' });
}


function mapStateToProps(state) {
  return {
    count: state.count
  };
}

  return (
      // <Provider>
    <Provider store={store}> 
    <div className="App">
      <ScrollContainer className="scroll-container">
      {/* <header className="App-header"> */}
      {/* {message} */}
      {showMessage ? (<div id='welcomeMessage'>
        In the early hours of April 15th 1912, The RMS Titanic sank beneath the waves. Beginning at 11:45 PM and until the ship's last moments, a courageous few worked tirelessly to launch lifeboats. 
        <br/><br/>  
        In the end only 712 people, less then 1/3rd of those who were on board, survived. 
        <br/> <br/> 
        Click on a lifeboat to learn more about that boat's survivors.
        <br/>  
        <button onClick={() => setMessageOff(null)} id="exploreBtn">Explore</button>

        </div>) : true}

        <img src={titanic} id="shipLayout" alt="ship blueprint"/>
         {/* Click on a lifeboat to see who was on board. */}

         {/* <button onClick={props.displayPassengers}>Lifeboat #1</button> */}
         <button class="lifeboatBtn" onClick={thin()}>Lifeboat #1</button>
         <button class="lifeboatBtn" onClick={() => {console.log(JSON.stringify(props.displayPassengers))}}>Lifeboat #2</button>
         <div>Surviviors of lifeboat #1 Include: {props.lifeboat1Passenger}</div>
         <br/>
         <button onClick={this.decrement}>Minus -</button>
          <span>{this.props.count}</span>
         <button onClick={this.increment}>Add +</button>

         <button onClick={this.decrement}>Minus -</button>
          <span>{this.props.count}</span>
         <button onClick={this.increment}>Add +</button>



      {/* </header> */} 
      </ScrollContainer>
    </div>
    </Provider>
  );
}

export default connect(mapStateToProps)(App);