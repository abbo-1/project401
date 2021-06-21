import React from 'react';
import {useState} from "react"
import { Row, Col, Container, Button} from "react-bootstrap";
import FaceIcon from '@material-ui/icons/Face';

const Visualizer = () => {
    
    const [showPeople, setShowPeople] = useState(false);
    // const handleClosePeople = () => setShowPeople(false);
    // const handleShowPeople = () => setShowPeople(true);

    // const displayPpl = () => {
    //     <FaceIcon />
    // }

    // const PeopleCounter = ({n}) => {
    //     let people = []
    //     for (let i = 0; i < n; ++i) {
    //         people.push(<FaceIcon />)
    //     }
    // }


    const displayIt = () => {
        setShowPeople(true);;
    }

    // const n = 1492
    // const tryThis = [...Array(n)].map((e, i) => <span key={i}>test</span>)



    // const personIcon = () => {
    // [...Array(1493)].map((elementInArray, i) => ( 
    // <div key={i}> Whatever needs to be rendered repeatedly </div> 
    // ) 

    // )}

{/* 
            {showPeople ? [...Array(1493)].map((v, i) => <FaceIcon /> ) : null}

        <Button onClick={displayIt}>turtles</Button> */}

    return (
        <div>


            {/* { [...Array(1493)].map((v, i) => <FaceIcon /> ) } */}
            <Container>
            <Row>

            <Col sm={12} md={3}>
            {[...Array(805)].map((v, i) => <FaceIcon style={{color: "green"}}/> )}
            </Col>

            <Col sm={12} md={3}>
            {[...Array(434)].map((v, i) => <FaceIcon style={{color: "purple"}}/> )}
            </Col>

            <Col sm={12} md={3}>
            {[...Array(112)].map((v, i) => <FaceIcon style={{color: "black"}} /> )}
            </Col>

            <Col sm={12} md={3}>
            {[...Array(908)].map((v, i) => <FaceIcon style={{color: "blue"}} /> )}
            </Col>

            </Row>
            </Container>
            </div>
    )

};

export default Visualizer