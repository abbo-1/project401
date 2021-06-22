import React from 'react';
import {useState} from "react"
import { Modal, Row, Col, Container, Button} from "react-bootstrap";
import { PieChart, Pie, Legend } from 'recharts';
import FaceIcon from '@material-ui/icons/Face';

const Visualizer = () => {
    
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    const data01 = [
        {
          "name": "Male Passengers",
          "value": 805
        },
        {
          "name": "Women Passengers",
          "value": 434
        },
        {
           "name": "Children Passengers",
           "value": 112
        },
        {
            "name": "Crew",
            "value": 908
        },
    ]

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
      <Button variant="primary" onClick={handleShow}>
        Beep
      </Button>

        <Modal 
        show={show} 
        onHide={handleClose}
        dialogClassName="modal-90w modal-90h"
        aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
          <Row>
              <Col sm={12} md={6}>
                  <div>
                      TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
                  </div>
              </Col>
              <Col sm={12} md={6}>
              <Legend verticalAlign="top" height={36}/>
                <PieChart width={300} height={300}>
                    <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label/>
                </PieChart>
              </Col>
            </Row>
          </Modal.Header>

          <Modal.Body>
          <Container>

            <Row>
            
            <Col sm={12} md={3}>
            <Modal.Title>MEN ON BOARD</Modal.Title>
            {[...Array(805)].map((v, i) => <FaceIcon style={{color: "green"}}/> )}
            </Col>

            <Col sm={12} md={3}>
            <Modal.Title>WOMEN ON BOARD</Modal.Title>
            {[...Array(434)].map((v, i) => <FaceIcon style={{color: "purple"}}/> )}
            </Col>

            <Col sm={12} md={3}>
            <Modal.Title>CHILDREN ON BOARD</Modal.Title>
            {[...Array(112)].map((v, i) => <FaceIcon style={{color: "orange"}} /> )}
            </Col>

            <Col sm={12} md={3}>
            <Modal.Title>CREW ON BOARD</Modal.Title>
            {[...Array(908)].map((v, i) => <FaceIcon style={{color: "blue"}} /> )}
            </Col>

            </Row>
            </Container>
              </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      


            {/* { [...Array(1493)].map((v, i) => <FaceIcon /> ) } */}
            {/* // <Container>
            // <Row>

            // <Col sm={12} md={3}>
            // {[...Array(805)].map((v, i) => <FaceIcon style={{color: "green"}}/> )}
            // </Col>

            // <Col sm={12} md={3}>
            // {[...Array(434)].map((v, i) => <FaceIcon style={{color: "purple"}}/> )}
            // </Col>

            // <Col sm={12} md={3}>
            // {[...Array(112)].map((v, i) => <FaceIcon style={{color: "black"}} /> )}
            // </Col>

            // <Col sm={12} md={3}>
            // {[...Array(908)].map((v, i) => <FaceIcon style={{color: "blue"}} /> )}
            // </Col>

            // </Row>
            // </Container>
            // </div> */}
            </div>
    )

};

export default Visualizer