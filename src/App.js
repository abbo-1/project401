import React, { useState, useEffect } from 'react';
import './App.css';
import Visualizer from './components/Visualizer.js'
import ScrollContainer from 'react-indiana-drag-scroll';
// import AppBar from '@material-ui/core/AppBar';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Navbar from 'react-bootstrap/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Slider from '@material-ui/core/Slider';
import Drawer from '@material-ui/core/Drawer';

import Slider from 'react-toolbox/lib/slider';

import Button from '@material-ui/core/Button';

import titanic from './images/titanic2.png';


function App(props) {

const [showMessage, setMessageOff] = useState(true);

const [showLifeboatInfo, setLifeboatInfoOff] = useState();

const [state, setState] = React.useState({
  top: false,
});

const toggleDrawer = (anchor, open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }

  setState({ ...state, [anchor]: open });
};

function valuetext(value) {
  return `${value}nuts`;
}

state = {
  slider3: 1
};

function handleChange(slider, value) {
  const newState = {};
  newState[slider] = value;
  setState(newState);
};

const list = (anchor) => (
  <div
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
  >
    <div id="sliderSize">
        <Typography id="discrete-slider-small-steps" gutterBottom>
        Titanic, April 14th-15th 1912
        </Typography>
        {/* <Slider
          defaultValue={0.00000005}
          getAriaValueText={valuetext}
          valueLabelDisplay="on"
          aria-labelledby="discrete-slider-small-steps"
          step={0.00000001}
          marks={marks}
          min={-0.00000005}
          max={0.0000001}
        /> */}
        <Slider 
          min={1} 
          max={11} 
          editable value={state.slider2} 
          onChange={handleChange.bind(this, 'slider2')} 
        />
        </div>

  </div>
);


const marks = [
  {
    value: 1140,
    label: '11:40PM',
  },
  {
    value: 1200,
    label: '12:00AM',
  },
  {
    value: 1230,
    label: '12:30AM',
  },
  {
    value: 100,
    label: '1:00AM',
  },
];

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

        
        <div>
    
        {[' '].map((anchor) => (
        <React.Fragment key={anchor}>
          <KeyboardArrowDownIcon id='downIcon' onClick={toggleDrawer(anchor, true)}>{anchor}</KeyboardArrowDownIcon>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
        ))}
        </div>

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