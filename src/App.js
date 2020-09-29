import React, { useState, useEffect } from 'react';
import './App.css';
import ScrollContainer from 'react-indiana-drag-scroll';
import titanic from './images/titanic2.png';

// const welcomeMessage = <div id='welcomeMessage'>
//   In the early hours of April 15th 1912, The RMS Titanic sank beneath the waves. Starting at 11:45 PM and until the ship's last moments a courageous few worked tirelessly to launch lifeboats. <br/><br/>  In the end only 712 people, less then 1/3rd of those who were on board, survived. <br/> <br/> Click on a lifeboat to learn more about those surviviors.
//   <br/>  
//   <button onClick={() => setDisplayComponent(null)} id="exploreBtn">Explore</button>
//   </div>

function App() {
//   const [message, setMessageOff] = useState(
//     <div id='welcomeMessage'>
//         In the early hours of April 15th 1912, The RMS Titanic sank beneath the waves. Beginning at 11:45 PM and until the ship's last moments, a courageous few worked tirelessly to launch lifeboats. 
//         <br/><br/>  
//         In the end only 712 people, less then 1/3rd of those who were on board, survived. 
//         <br/> <br/> 
//         Click on a lifeboat to learn more about those survivors.
//         <br/>  
//         <button onClick={() => setMessageOff(null)} id="exploreBtn">Explore</button>
//     </div>);
const [showMessage, setMessageOff] = useState(true);



  // useEffect(() => {
  //   setTimeout(() => {
  //     setMessage("asdf");
  //   }, 10000)
  // }
  // )

  return (
    <div className="App">
      <ScrollContainer className="scroll-container">
      {/* <header className="App-header"> */}
      {/* {message} */}
      {showMessage ? (<div id='welcomeMessage'>
In the early hours of April 15th 1912, The RMS Titanic sank beneath the waves. Beginning at 11:45 PM and until the ship's last moments, a courageous few worked tirelessly to launch lifeboats. 
<br/><br/>  
In the end only 712 people, less then 1/3rd of those who were on board, survived. 
<br/> <br/> 
Click on a lifeboat to learn more about those survivors.
<br/>  
<button onClick={() => setMessageOff(null)} id="exploreBtn">Explore</button>
</div>) : true}
      <img src={titanic} id="shipLayout" alt="ship blueprint"/>
         {/* Click on a lifeboat to see who was on board. */}
      {/* </header> */}
      </ScrollContainer>
    </div>
  );
}

export default App;
