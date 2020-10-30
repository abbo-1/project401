// export const DISPLAY_PASSENGERS = "DISPLAY_PASSENGERS";

// const displayPassengers = {

//     type: DISPLAY_PASSENGERS,      
//     payload: "TEST PASSENGER"
// };

function reducer(state = initialState, action) {
    switch(action.type) {
      case 'INCREMENT':
        return {
          count: state.count + 1
        };
      case 'DECREMENT':
        return {
          count: state.count - 1
        };
      default:
        return state;
    }
  }
  
    
export default displayPassengers;