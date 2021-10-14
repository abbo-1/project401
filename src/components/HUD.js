import React, { useState, useEffect } from 'react';

import Visualizer from './Visualizer.js'

import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import RestoreIcon from '@material-ui/icons/Restore';

import RadioGroup from '@material-ui/core/RadioGroup';

import titanic from '../images/titanic2.png';
import titanic1140 from '../images/titanic1140.png';
import Legend from '../components/Legend'

import { TransformWrapper, TransformComponent} from "react-zoom-pan-pinch";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Navbar from 'react-bootstrap/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


function HUD(props) {

    // FOR WELCOME MESSAGE
  const [showMessage, setMessageOff] = useState(true);

  // FOR LEGEND
  const [showLegend, setLegendOff] = useState(false);

  function turnOff() {
     setLegendOff(!showLegend)
  }

    // FOR DRAWER PULL DOWN
  const [state, setState] = useState({
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
      id="pullDownBackground"
      // class="MuiPaper-root MuiDrawer-paper MuiDrawer-paperAnchorTop MuiPaper-elevation16"
    >

        <div id="pullDownTxt">
{/* 
          <div id="topMargin">
            Titanic
          </div> */}
        
          <div id="topMargin">
            April 14th-15th 1912
          </div>

          <div>
            Please choose a time from the sinking below to see what was happening on deck.
          </div>
        
        <div className="break" />

        <FormControl component="fieldset">

        <RadioGroup aria-label="gender" name="gender1"  onChange={handleChange}>

        <Container>
        <Row id="radioBtnsDiv">

          {/* <FormControlLabel value="female" onClick={handleClick} control={<Radio />} label="11:40 PM" /> */}
          <Col sm={12} md={3}>
          <li class="no-bullets"><FormControlLabel onClick={handleClick} value="female" control={<Radio />} label="11:40 PM" /></li>
          <li class="no-bullets"><FormControlLabel onClick={handleClick} value="female" control={<Radio />} label="12:35 AM" /></li>
          <li class="no-bullets"><FormControlLabel onClick={handleClick} value="female" control={<Radio />} label="1:20 AM" /></li>
          </Col>
          <Col sm={12} md={3}>
          <li class="no-bullets"><FormControlLabel onClick={handleClick} value="female" control={<Radio />} label="12:00 AM" /></li>
          <li class="no-bullets"><FormControlLabel onClick={handleClick} value="female" control={<Radio />} label="12:50 AM" /></li>
          <li class="no-bullets"><FormControlLabel onClick={handleClick} value="female" control={<Radio />} label="1:30 AM" /></li>
          </Col>
          <Col sm={12} md={3}>
          <li class="no-bullets"><FormControlLabel onClick={handleClick} value="female" control={<Radio />} label="12:20 AM" /></li>
          <li class="no-bullets"><FormControlLabel onClick={handleClick} value="female" control={<Radio />} label="1:05 AM" /></li>
          <li class="no-bullets"><FormControlLabel onClick={handleClick} value="female" control={<Radio />} label="1:43 AM" /></li>
          </Col>

          <Col sm={12} md={3}>
          <div class="pullDownTxtQuote">
          "You could actually walk miles along the decks and passages covering different ground all the time. I was thoroughly familiar with pretty well every type of ship afloat but it took me 14 days before I could, with confidence, find my way from one part of that ship to another." 
          </div>
          <div class="pullDownTxtQuote">
            - Charles Lightoller, 2nd Officer
          </div>
          </Col>

        </Row>
        </Container>

        </RadioGroup>
        </FormControl>
        </div>

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

  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = (event) => {
   setSelectedValue(event.target.value);
  };

  //BACKGROUND & TIME STATE
  const [map, setMap] = useState(<img src={titanic} id="shipLayout" alt="ship blueprint"/>)

  const [timeDate, setTimeDate] = useState("")

  function handleClick () {
    setMap(
      <img  id="shipLayout" alt="ship blueprint" src={titanic1140}/>
      );
    setTimeDate(
      <div>
        <div className="dateTime">11:40 pm</div>
        <div className="dateTime">April 14th, 1912</div>
      </div>
      );
  }

    return (
        <div>

                  {/* {({ zoomIn, zoomOut, resetTransform, ...rest }) => ( */}

        {/* <div id="zoomBtnsDiv"> */}
          {/* <ZoomInIcon className="zoomBtns" onClick={props.zoomIn}/>
          <ZoomOutIcon className="zoomBtns" onClick={props.zoomOut}/>
          <RestoreIcon className="zoomBtns" onClick={props.resetTransform}/> */}

          {/* <ZoomInIcon className="zoomBtns" />
          <ZoomOutIcon className="zoomBtns" />
          <RestoreIcon className="zoomBtns" />
        </div> */}

{showMessage ? (<div id='welcomeMessage'>
        In the twilight hours of April 15th 1912, the RMS Titanic sank beneath the waves. From the time of collision at 11:45 pm, until the ship's last moments, a courageous few worked tirelessly to launch lifeboats. 
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

            {/* <div id="pullDownDiv">
                {pullDown}
            </div> */}
        
        <div id="pullDownDiv">
            {[' '].map((anchor) => (
                <React.Fragment key={anchor}>
                    <KeyboardArrowDownIcon id='downIcon' onClick={toggleDrawer(anchor, true)}> 
                        {anchor}
                    </KeyboardArrowDownIcon>

                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>

                </React.Fragment>
            ))}
        </div>

            {/* {({ zoomIn, zoomOut, resetTransform, ...rest }) => (

            <div id="zoomBtnsDiv">
                <ZoomInIcon className="zoomBtns" onClick={() => zoomIn()}/>
                <ZoomOutIcon className="zoomBtns" onClick={() => zoomOut()}/>
                <RestoreIcon className="zoomBtns" onClick={() => resetTransform()}/>
            </div> */}

            {/* <div className="dateTimeDiv">
                {timeDate}
            </div>  */}
   
            <div id="lowerLeftCorner">
                <button id="legendBtn" onClick={() => setLegendOff(!showLegend)}>LEGEND</button>
            </div>

                {/* <button id="lifeboatBtn">
                    DEMOGRAPHICS
                </button>
            </div> */}

      {showLegend ? (
        <div className="legend">
            <Legend />
        </div>
      ): false}

            

        </div>
    )
}

export default HUD