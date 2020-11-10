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

const initialState = {
    counter: 0,
  }
  
  export const counterReducer =  (state = initialState, action) => {
    switch (action.type) {
        
      case TYPE_INCREMENT:
        return {
          ...state,
          counter: state.counter + 1,
        }
      case TYPE_DECREMENT:
        return {
          ...state,
          counter: state.counter - 1,
        }
      default:
        return state
    }
  }
  
    
export default passengerListReducer;