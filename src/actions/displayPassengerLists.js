// export const DISPLAY_PASSENGERS = "DISPLAY_PASSENGERS";

// const displayPassengers = {

//     type: DISPLAY_PASSENGERS,      
//     payload: "TEST PASSENGER"
// };

export const TYPE_INCREMENT = 'INCREMENT'

export const TYPE_DECREMENT = 'DECREMENT'

export const increment = () => ({
  type: TYPE_INCREMENT,
})

export const decrement = () => ({
  type: TYPE_DECREMENT,
})
