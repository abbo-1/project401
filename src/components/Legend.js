import React from 'react'
import ReactDOM from "react-dom";

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import firstclass from '../images/people/firstclass.png';
import secondclass from '../images/people/secondclass.png';
import thirdclass from '../images/people/thirdclass.png';
import officer from '../images/people/officer.png';
import crew from '../images/people/crew.png';


function Legend(setLegendOff, showLegend) {

return(

    <div id="legendContent">
        <Row>
        <h3 className="m-auto">LEGEND</h3>
        </Row>
            <Row className="m-auto">
            <img src={officer} /> 
            Purple circles represent an officer.
            </Row>
            <Row className="m-auto">
            <img src={crew} /> 
            Blue circles represent a crew member.
            </Row>
            <Row className="m-auto">
            <img src={firstclass} /> 
            Yellow circles represent a first class passenger.
            </Row>
            <Row className="m-auto">
            <img src={secondclass} /> 
            Pink circles represent a first class passenger.
            </Row>
            <Row className="m-auto">
            <img src={thirdclass} /> 
            Orange circles represent a first class passenger.
            </Row>
                

            <button type="button" class="legendClose" onClick={() => setLegendOff(!showLegend)}>Close</button>

    </div>
    ) }


export default Legend