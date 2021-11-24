import React, { useState, createContext } from "react"
import titanic from '../images/titanic2.png'
import titanic1140 from '../images/titanic1140.png'
import HUD from '../components/HUD'

function ShipContext(scale) {
    // {(() => {
    //     switch (scale) {
    //         case "elevenForty": 
    //             return (
    //                 map = <img src={titanic1140} id="shipLayout" alt="ship blueprint"/>,
    //                 time = "11:40 pm",
    //                 date = "April 14th, 1912"
    //             )                
    //         case "elevenFifty":
    //             return (
    //                 map = <img src={titanic1150} id="shipLayout" alt="ship blueprint"/>,
    //                 time = "11:50 pm",
    //                 date = "April 14th, 1912"                
    //             )
    //         case "twelveTen":
    //             return (
    //                 map = <img src={titanic1210} id="shipLayout" alt="ship blueprint"/>,
    //                 time = "12:10 am",
    //                 date = "April 15th, 1912"                
    //             )
    //         default: 
    //             return (
    //                 map = <img src={titanic} id="shipLayout" alt="ship blueprint"/>,
    //                 time = "",
    //                 date = ""           
    //             )
    //         }
    //     })()}
    if (time === "elevenForty") {
        return (
            map = <img src={titanic1140} id="shipLayout" alt="ship blueprint"/>,
            time = "11:40 pm",
            date = "April 14th, 1912"
            )      
        } else if (time === "elevenFifty") {
        return (
            map = <img src={titanic1150} id="shipLayout" alt="ship blueprint"/>,
            time = "11:50 pm",
            date = "April 14th, 1912"                
            ) 
        } else if (time === "twelveTen") {
        return (
            map = <img src={titanic1210} id="shipLayout" alt="ship blueprint"/>,
            time = "12:10 am",
            date = "April 15th, 1912"                  
            ) 
        } else if (time === "twelveTen") {
        return (
            map = <img src={titanic1210} id="shipLayout" alt="ship blueprint"/>,
            time = "12:20 am",
            date = "April 15th, 1912"                  
            ) 
        } else {
        return (
            map = <img src={titanic} id="shipLayout" alt="ship blueprint"/>,
            time = "",
            date = ""           
            )
        }

    return (
        <>
        <HUD shipStuff={ShipContext} />
        </>
    )
}

export default ShipContext
import React, { useState } from "react";

// Your other imports.

function Test(exp) {
  switch (exp) {
    case 1:
      return <One />;
    case 2:
      return <Two />;
    case 3:
      return <Three />;
    default:
      return <None />;
  }
}

// this would be to generate a random component
// function randomIntFromInterval(min, max) {
//   return Math.floor(Math.random()*(max-min+1)+min);
// }

// function App() {
//   const [renderedComponent, setRenderedComponent] = useState(0);
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       // If you want a button for a particular component, you can
//       // put in that number 1,2,3 instead of the call to randomIntFromInterval
//       <button onClick={() => setRenderedComponent(randomIntFromInterval(1, 3))}>
//         Render One Two or Three
//       </button>
//       {renderedComponent !== 0 && <Test />}
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);