// export const DISPLAY_PASSENGERS = "DISPLAY_PASSENGERS";

// const displayPassengers = {

//     type: DISPLAY_PASSENGERS,      
//     payload: "TEST PASSENGER"
// };

// export const TYPE_INCREMENT = 'INCREMENT'
// export const TYPE_DECREMENT = 'DECREMENT'

// export const increment = () => ({
//   type: TYPE_INCREMENT,
// })

// export const decrement = () => ({
//   type: TYPE_DECREMENT,
// })

import { useState } from 'react'

function App() {

const [lifeboatOne, setTasks] = useState([
  {
      id: 1,
      name: 'John Collins',
      gender: 'Male',
      age: '38',
      class: 'Crew  (Engineering)',
  },
  {
    id: 2,
    name: 'Sir Cosmo Duff Gordon',
    gender: 'Male',
    age: '49',
    class: '1st Class',
  },
  {
    id: 3,
    name: 'Lady Lucy Duff Gordon',
    gender: 'Female',
    age: '48',
    class: '1st Class',
  },
  {
    id: 4,
    name: 'Laura Francatelli',
    gender: 'Female',
    age: '31',
    class: '1st Class',
  },
  {
    id: 5,
    name: 'Charles Hendrickson',
    gender: 'Male',
    age: '28',
    class: 'Crew (Engineering)',
  },
  {
    id: 6,
    name: 'Albert Horswill',
    gender: 'Male',
    age: '33',
    class: 'Crew (Deck)',
  },
  {
    id: 7,
    name: 'William Pusey',
    gender: 'Male',
    age: '22',
    class: 'Crew (Engineering)',
  },
  {
    id: 8,
    name: 'Abraham Salomon',
    gender: 'Male',
    age: '43',
    class: '1st Class',
  },
  {
    id: 9,
    name: 'Frederick Sheath',
    gender: 'Male',
    age: '20',
    class: 'Crew (Engineering)',
  },
  {
    id: 10,
    name: 'Charles Stengel',
    gender: 'Male',
    age: '54',
    class: '1st Class',
  },
  {
    id: 11,
    name: 'George Symons',
    gender: 'Male',
    age: '24',
    class: 'Crew (Deck)',
  },
  {
    id: 12,
    name: 'George Taylor',
    gender: 'Male',
    age: '23',
    class: 'Crew (Engineering)',
  },
])


  return (

  )
}

export default displayPassengerLists;