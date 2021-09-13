import React, { useState, useEffect } from 'react';
import './App.css';
import Visualizer from './components/Visualizer.js'
import Legend from './components/Legend.js'
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
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';

import titanic from './images/titanic2.png';
import titanic1140 from './images/titanic1140.png';


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
      // class="MuiPaper-root MuiDrawer-paper MuiDrawer-paperAnchorTop MuiPaper-elevation16"
    >

        <Typography>
        Titanic, April 14th-15th 1912
        </Typography>

        <Typography>
        Please choose a time from the sinking below to see what was happening on deck.
        </Typography>

        <FormControl component="fieldset">

        <RadioGroup aria-label="gender" name="gender1"  onChange={handleChange}>

          <FormControlLabel value="female" onClick={handleClick} control={<Radio />} label="11:40 PM" />
          <FormControlLabel value="male" onClick={handleClick}  control={<Radio />} label="12:00 AM" />
          <FormControlLabel value="other" onClick={handleClick} control={<Radio />} label="12:20 AM" />
          <FormControlLabel value="other" onClick={handleClick} control={<Radio />} label="12:40 AM" />
          <FormControlLabel value="other" onClick={handleClick}  control={<Radio />} label="1:00 AM" />
          <FormControlLabel value="other" onClick={handleClick}  control={<Radio />} label="1:20 AM" />
          <FormControlLabel value="other" onClick={handleClick}  control={<Radio />} label="1:40 AM" />

        </RadioGroup>
        </FormControl>

    </div>
  );

  // FOR LEGEND

  const listy = (legend) => (
    <div>

    </div>

  )

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

  //BACKGROUND STATE
  const [map, setMap] = useState(<img src={titanic} id="shipLayout" alt="ship blueprint"/>)
  const handleClick = () => setMap(<img  id="shipLayout" alt="ship blueprint" src={titanic1140}/>)

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
        Use the drop down menu above to see the ship at different points during the sinking.
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

        {/* <img src={titanic} id="shipLayout" alt="ship blueprint"/> */}
        {map}
        {/* <img src={map} /> */}

        <div className="dateTime">
        <div>11:40 pm</div>
        <div>April 14th, 1912</div>
        </div>


        <div>
      {[' '].map((legend) => (
        <React.Fragment key={legend}>
          <ExpandLessOutlinedIcon onClick={toggleDrawer(legend, true)}>{legend}</ExpandLessOutlinedIcon>
          <Drawer
            legend={legend}
            open={state[legend]}
            onClose={toggleDrawer(legend, false)}
            onOpen={toggleDrawer(legend, true)}
          >
            {listy(legend)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>


        <div className="legend">
        <Legend />
        </div>

        <div>
        <lifeboatDisplay />
        </div>

        {/* <Navbar sticky="bottom" bg="light" id="navBar"> */}


{/* 
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

        </Navbar > */}



         {/* Click on a lifeboat to see who was on board. */}

         {/* <button onClick={props.displayPassengers}>Lifeboat #1</button> */}
         {/* <button class="lifeboatBtn" onClick={thin()}>Lifeboat #1</button> */}

      {/* </header>  */}
      </ScrollContainer>
    </div>
  );
}

export default App;