import React, { useState, useEffect } from 'react';
import './App.css';
import ScrollContainer from 'react-indiana-drag-scroll';

import titanic from './images/titanic2.png';


function App(props) {

const [showMessage, setMessageOff] = useState(true);

const [showLifeboatInfo, setLifeboatInfoOff] = useState();

  return (
    <div className="App">
      <ScrollContainer className="scroll-container">
      {/* <header className="App-header"> */}
      {/* {message} */}
      {showMessage ? (<div id='welcomeMessage'>
        In the early hours of April 15th 1912, the RMS Titanic sank beneath the waves. From the time of collision at 11:45 PM, until the ship's last moments, a courageous few worked tirelessly to launch lifeboats. 
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

        <button onClick={alert} 
        class="lifeboatBtn">
        Lifeboat 1
        </button>

        <button onClick={alert} 
        class="lifeboatBtn">
        Lifeboat 2
        </button>

        <button onClick={alert} 
        class="lifeboatBtn">
        Lifeboat 3
        </button>

        <button onClick={alert} 
        class="lifeboatBtn">
        Lifeboat 4
        </button>

        <button onClick={alert} 
        class="lifeboatBtn">
        Lifeboat 5
        </button>

        <button onClick={alert} 
        class="lifeboatBtn">
        Lifeboat 6
        </button>

        
        <button onClick={alert} 
        class="lifeboatBtn">
        Lifeboat 7
        </button>

        <button onClick={alert} 
        class="lifeboatBtn">
        Lifeboat 8
        </button>

        <button onClick={alert} 
        class="lifeboatBtn">
        Lifeboat 9
        </button>

        <button onClick={alert} 
        class="lifeboatBtn">
        Lifeboat 10
        </button>

        <button onClick={alert} 
        class="lifeboatBtn">
        Lifeboat 11
        </button>

        <button onClick={alert} 
        class="lifeboatBtn">
        Lifeboat 12
        </button>

        
        <button onClick={alert} 
        class="lifeboatBtn">
        Lifeboat 13
        </button>

                
        <button onClick={alert} 
        class="lifeboatBtn">
        Lifeboat 14
        </button>

                
        <button onClick={alert} 
        class="lifeboatBtn">
        Lifeboat 15
        </button>



         {/* Click on a lifeboat to see who was on board. */}

         {/* <button onClick={props.displayPassengers}>Lifeboat #1</button> */}
         {/* <button class="lifeboatBtn" onClick={thin()}>Lifeboat #1</button> */}

      {/* </header> */} 
      </ScrollContainer>
    </div>
  );
}

export default App;