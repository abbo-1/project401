import {DISPLAY_PASSENGERS} from '../actions/displayPassengerLists';

const passengerListReducer = (state ={}, {type, payload}) => {
    switch(type) {

        case DISPLAY_PASSENGERS :

            return ({
                name: "lifeboat1Passenger",
                age: "27",
                class: "third"
                    })
            return state

        };

};
    
export default passengerListReducer;