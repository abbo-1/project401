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


// const handleRender = (e, props) => {
//     let exp = Math.floor(Math.random() * props);
//     console.log(exp);
//     return exp;
//   };
//   function Test(exp) {
//     switch (exp) {
//       case 1:
//         return <One />;
//       case 2:
//         return <Two />;
//       case 3:
//         return <Three />;
//       default:
//         return <None />;
//     }
//   }
//   function App() {
//     const [exp, setExp] = useState(0);
//     return (
//       <div className="App">
//         <button onClick={() => setExp(handleRender('a', '5'))}>
//           Render One Two or Three
//         </button>
//         {Test(exp)}
//       </div>
//     );
//   }