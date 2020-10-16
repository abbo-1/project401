import {DISPLAY_PASSENGERS} from '../actions/displayPassengerLists';

const passengerListReducer = (state ={}, {type, payload}) => {
    switch(type) {

        case DISPLAY_PASSENGERS :

            return {name: "lifeboat1Passenger"}
            return state

        };

};
    
export default passengerListReducer;