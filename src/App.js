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

import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

import titanic from './images/titanic2.png';


function App(props) {

  // FOR WELCOME MESSAGE
  const [showMessage, setMessageOff] = useState(true);

  // FOR DRAWER PULL DOWN
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });
  
  // DRAWER PULL DOWN INARDS
  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      class="MuiPaper-root MuiDrawer-paper MuiDrawer-paperAnchorTop MuiPaper-elevation16"
    >
        <Typography>
        Titanic, April 14th-15th 1912
        </Typography>

        <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      />
      <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'B' }}
      />
      <GreenRadio
        checked={selectedValue === 'c'}
        onChange={handleChange}
        value="c"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'C' }}
      />
      <Radio
        checked={selectedValue === 'd'}
        onChange={handleChange}
        value="d"
        color="default"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'D' }}
      />
      <Radio
        checked={selectedValue === 'e'}
        onChange={handleChange}
        value="e"
        color="default"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'E' }}
        size="small"
      />
    </div>
  );

  // FOR RADIO BUTTONS
  const GreenRadio = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
   setSelectedValue(event.target.value);
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