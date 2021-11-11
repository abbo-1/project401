import React, { useState, useEffect } from 'react';
import ShipContext from './contexts/shipContext.js'
import './App.css';

import LoadingGif from './images/loading.gif'

import Visualizer from './components/Visualizer.js'
import Legend from './components/Legend.js'
import HUD from './components/HUD.js'

import ScrollContainer from 'react-indiana-drag-scroll';
// import AppBar from '@material-ui/core/AppBar';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Navbar from 'react-bootstrap/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Slider from '@material-ui/core/Slider';
import Drawer from '@material-ui/core/Drawer';
// import Button from '@mui/material/Button';

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { TransformWrapper, TransformComponent} from "react-zoom-pan-pinch";
// import ZoomInIcon from '@material-ui/icons/ZoomIn';
// import ZoomOutIcon from '@material-ui/icons/ZoomOut';
// import RestoreIcon from '@material-ui/icons/Restore';
// import MapIcon from '@mui/icons-material/Map';

// import { withStyles } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"

import * as actionCreators  from "./store/actions/action-creator.js"
// import {updateInfoEleven40} from "./store/actions/action-creator.js"

// import { actionCreators } from "./store/actionCreatorIndex.js"



import titanic from './images/titanic2.png';
import titanic1140 from './images/titanic1140.png';


function App(props) {
  //FOR REDUX
  const info = useSelector(
    (state) => state.info
  )

  const dispatch = useDispatch()

  const { updateInfoEleven40, updateInfoEleven45 } = bindActionCreators(actionCreators, dispatch)

  //FOR LOADING GIF
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])


  // FOR LEGEND
  // const listy = (legend) => (
    
  //   <div className="legend">
  //   <Legend />
  //   </div>

  // )

  
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
    <div className="App">
      {/* <TransformWrapper>
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <TransformComponent> */}
        {/* <HUD props={zoomIn, zoomOut, resetTransform} /> */}
        {/* <ShipContext.Provider value={ time, date }> */}
        <ShipContext />
        {/* <HUD /> */}
        <ScrollContainer className="scroll-container">
        {map}
        <button onclick={() => updateInfoEleven40}>CLICK 40</button>
        <button>Click 12</button>
        {/* <button onClick={props.displayPassengers}
        class="lifeboatBtn">
        SHIP DEMOGRAPHICS
        </button>
        
        <div>
        <lifeboatDisplay />
        </div> */}
{/* 
        <Visualizer class="lifeboatBtn"/> */}
      </ScrollContainer>
      {/* </ShipContext.Provider> */}
      {/* </TransformComponent>
      )}
      </TransformWrapper> */}
      </div>
  );
}

export default App;