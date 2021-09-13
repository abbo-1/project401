import React from 'react'

import firstclass from '../images/people/firstclass.png';
import secondclass from '../images/people/secondclass.png';
import thirdclass from '../images/people/thirdclass.png';
import officer from '../images/people/officer.png';
import crew from '../images/people/crew.png';


const Legend = () => {


    return (

    <div>

        LEGEND

            <img src={officer} /> 
            Purple circles represent an officer.

            <img src={crew} /> 
            Blue circles represent a crew member.

            <img src={firstclass} /> 
            Yellow circles represent a first class passenger.

            <img src={secondclass} /> 
            Pink circles represent a first class passenger.

            <img src={thirdclass} /> 
            Orange circles represent a first class passenger.

    </div>
    )
}

export default Legend