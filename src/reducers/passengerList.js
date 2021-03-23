// import {DISPLAY_PASSENGERS} from '../actions/displayPassengerLists';

// const passengerListReducer = (state ={}, {type, payload}) => {
//     switch(type) {

//         case DISPLAY_PASSENGERS1 :

//             return ({
//                 name: "lifeboat1Passenger",
//                 age: "27",
//                 class: "third"
//                     })
//         case DISPLAY_PASSENGERS2 :

//         return ({
//             name: "lifeboat2Passenger",
//             age: "27",
//             class: "third"
//                 })
//         return state

//     };

// };

// const initialState = {
//     counter: 3,
//   }
  
//   export const counterReducer =  (state = initialState, action) => {
//     switch (action.type) {

//       case TYPE_INCREMENT:
//         return {

//           ...state,
//           counter: state.counter + 1,
//         }

//       case TYPE_DECREMENT:
//         return {

//           ...state,
//           counter: state.counter - 1,
//         }

//       default:
//         return state
//     }
//   }

// import { TYPE_INCREMENT, TYPE_DECREMENT } from '../actions/displayPassengerLists'
// import displayPassengerLists from '../actions/displayPassengerLists'
// import { TYPE_INCREMENT, TYPE_DECREMENT } from displayPassengerLists

// const initialState = {
//   counter: 0,
// }

// export const passengerListReducer =  (state = initialState, action) => {
//   switch (action.type) {
//     case TYPE_INCREMENT:
//       return {
//         ...state,
//         counter: state.counter + 2,
//       }
//     case TYPE_DECREMENT:
//       return {
//         ...state,
//         counter: state.counter - 2,
//       }
//     default:
//       return state
//   }
// }
    
// export default passengerListReducer;

const PassengerListContext = React.createContext();

const PassengerListProvider = () => {
  return (
    <PassengerListContext>
      
    </PassengerListContext>
  )
}

