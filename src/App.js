import React, { useState, useEffect } from 'react';
import './App.css';
import Visualizer from './components/Visualizer.js'
import ScrollContainer from 'react-indiana-drag-scroll';
// import AppBar from '@material-ui/core/AppBar';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
import Navbar from 'react-bootstrap/Navbar';

import titanic from './images/titanic2.png';


function App(props) {

const [showMessage, setMessageOff] = useState(true);

const [showLifeboatInfo, setLifeboatInfoOff] = useState();

handleIncrement = counter => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = { ...counters[index] };
  counters[index].value++;
  this.setState({ counters });
};

handleDecrement = counter => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = { ...counters[index] };
  counters[index].value--;
  this.setState({ counters });
};


  return (
    <div className="App">
      <ScrollContainer className="scroll-container">
      {/* <header className="App-header"> */}
      {/* {message} */}
      {showMessage ? (<div id='welcomeMessage'>
        In the twilight hours of April 15th 1912, the RMS Titanic sank beneath the waves. From the time of collision at 11:45 PM, until the ship's last moments, a courageous few worked tirelessly to launch lifeboats. 
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

        <div>
        <lifeboatDisplay />
        </div>

        <Navbar sticky="bottom" bg="light" id="navBar">

        <Visualizer />

        <button onClick={alert}>Visualization</button>

        <button onClick={alert} 
        class="lifeboatBtn">
        Lifeboat 1
        </button>

        <button onClick={alert} 
        class="lifeboatBtn">
        Lifeboat 2
        </button>

        </Navbar >



         {/* Click on a lifeboat to see who was on board. */}

         {/* <button onClick={props.displayPassengers}>Lifeboat #1</button> */}
         {/* <button class="lifeboatBtn" onClick={thin()}>Lifeboat #1</button> */}

      {/* </header> */} 
      </ScrollContainer>
    </div>
  );
}

export default App;