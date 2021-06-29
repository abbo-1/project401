import React from 'react';
import {useState} from "react"
import { Modal, Row, Col, Container, Button} from "react-bootstrap";
import { PieChart, Pie, Legend } from 'recharts';
import FaceIcon from '@material-ui/icons/Face';
import { CreateTwoTone } from '@material-ui/icons';

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

    const genderData = [
        {
          "name": "Male Passengers",
          "value": 1690
        //   885 Male Crew, 805 Male Passengers
        },
        {
          "name": "Female Passengers",
          "value": 457
        //   23 Female Crew, 434 Female Passengers 
        },
        {
           "name": "Child Passengers",
           "value": 112
        },
    ]

    const classData = [
        {
          "name": "First Class",
          "value": 324
        },
        {
          "name": "Second Class",
          "value": 284
        },
        {
           "name": "Third Class",
           "value": 709
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
                      Over 2200 people were on board during Titanic's maiden voyage. In an effort to illustrate the wide range of genders, religions, and backgrounds represented please use the buttons below.
                  </div>
              </Col>
              <Col sm={12} md={6}>
              <Legend verticalAlign="top" height={36}/>
                <PieChart width={300} height={300}>
                    <Pie 
                    data={genderData} 
                    dataKey="value" 
                    nameKey="name" 
                    cx="50%" 
                    cy="50%" 
                    outerRadius={100} 
                    fill="#8884d8" 
                    label={({
                        cx,
                        cy,
                        midAngle,
                        innerRadius,
                        outerRadius,
                        value,
                        index
                      }) => {
                        console.log("handling label?");
                        const RADIAN = Math.PI / 180;
                        // eslint-disable-next-line
                        const radius = 25 + innerRadius + (outerRadius - innerRadius);
                        // eslint-disable-next-line
                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                        // eslint-disable-next-line
                        const y = cy + radius * Math.sin(-midAngle * RADIAN);
              
                        return (
                          <text
                            x={x}
                            y={y}
                            fill="#8884d8"
                            textAnchor={x > cx ? "start" : "end"}
                            dominantBaseline="central"
                          >
                            {genderData[index].name} : ({value})
                          </text>
                        );
                      }}
                    />
                </PieChart>
              </Col>
            </Row>
            <Col>
            <Row>
                <Button sm={12} md={3}>BY GENDER</Button>
                <Button sm={12} md={3}>BY CLASS</Button>
                <Button sm={12} md={3}>BY COUNTRY OF ORIGIN</Button>
                <Button sm={12} md={3}>BY AGE RANGE</Button>
                <Button sm={12} md={3}>BY AGE RANGE</Button>
            </Row>
            </Col>
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
            <Row>
            
            <Col sm={12} md={3}>
            <Modal.Title>FIRST CLASS</Modal.Title>
            {[...Array(324)].map((v, i) => <FaceIcon style={{color: "yellow"}}/> )}
            </Col>

            <Col sm={12} md={3}>
            <Modal.Title>SECOND CLASS</Modal.Title>
            {[...Array(284)].map((v, i) => <FaceIcon style={{color: "pink"}}/> )}
            </Col>

            <Col sm={12} md={3}>
            <Modal.Title>THIRD CLASS</Modal.Title>
            {[...Array(709)].map((v, i) => <FaceIcon style={{color: "red"}} /> )}
            </Col>

            <Col sm={12} md={3}>
            <Modal.Title>CREW ON BOARD</Modal.Title>
            {[...Array(908)].map((v, i) => <FaceIcon style={{color: "blue"}} /> )}
            </Col>

            </Row>
            <Row>
            
            <Col sm={12} md={3}>
            <Modal.Title>UNITED KINGDOM</Modal.Title>
            {[...Array(434)].map((v, i) => <FaceIcon style={{color: "yellow"}}/> )}
            </Col>

            <Col sm={12} md={3}>
            <Modal.Title>AMERICA</Modal.Title>
            {[...Array(203)].map((v, i) => <FaceIcon style={{color: "pink"}}/> )}
            </Col>

            <Col sm={12} md={3}>
            <Modal.Title>NORTHERN EUROPE</Modal.Title>
            {[...Array(132)].map((v, i) => <FaceIcon style={{color: "red"}} /> )}
            </Col>

            <Col sm={12} md={3}>
            <Modal.Title>MIDDLE EAST</Modal.Title>
            {[...Array(87)].map((v, i) => <FaceIcon style={{color: "blue"}} /> )}
            </Col>
            
            <Col sm={12} md={3}>
            <Modal.Title>WESTERN EUROPE</Modal.Title>
            {[...Array(33)].map((v, i) => <FaceIcon style={{color: "blue"}} /> )}
            </Col>

            <Col sm={12} md={3}>
            <Modal.Title>EASTERN EUROPE</Modal.Title>
            {[...Array(20)].map((v, i) => <FaceIcon style={{color: "blue"}} /> )}
            </Col>

            <Col sm={12} md={3}>
            <Modal.Title>SOUTHERN EUROPE</Modal.Title>
            {[...Array(10)].map((v, i) => <FaceIcon style={{color: "blue"}} /> )}
            </Col>

            <Col sm={12} md={3}>
            <Modal.Title>ASIA-PACIFIC</Modal.Title>
            {[...Array(8)].map((v, i) => <FaceIcon style={{color: "blue"}} /> )}
            </Col>

            <Col sm={12} md={3}>
            <Modal.Title>AFRICA</Modal.Title>
            {[...Array(7)].map((v, i) => <FaceIcon style={{color: "blue"}} /> )}
            </Col>


            </Row>

            <Row>
            
            <Col sm={12} md={3}>
            <Modal.Title>0-4 YEARS OLD</Modal.Title>
            {[...Array(54)].map((v, i) => <FaceIcon style={{color: "yellow"}}/> )}
            </Col>

            <Col sm={12} md={3}>
            <Modal.Title>5-9 YEARS OLD</Modal.Title>
            {[...Array(38)].map((v, i) => <FaceIcon style={{color: "pink"}}/> )}
            </Col>

            <Col sm={12} md={3}>
            <Modal.Title>10-14 YEARS OLD</Modal.Title>
            {[...Array(30)].map((v, i) => <FaceIcon style={{color: "red"}} /> )}
            </Col>

            <Col sm={12} md={3}>
            <Modal.Title>15-19 YEARS OLD</Modal.Title>
            {[...Array(153)].map((v, i) => <FaceIcon style={{color: "blue"}} /> )}
            </Col>
            
            <Col sm={12} md={3}>
            <Modal.Title>20-24 YEARS OLD</Modal.Title>
            {[...Array(259)].map((v, i) => <FaceIcon style={{color: "blue"}} /> )}
            </Col>

            <Col sm={12} md={3}>
            <Modal.Title>25-29 YEARS OLD</Modal.Title>
            {[...Array(203)].map((v, i) => <FaceIcon style={{color: "blue"}} /> )}
            </Col>

            <Col sm={12} md={3}>
            <Modal.Title>30-34 YEARS OLD</Modal.Title>
            {[...Array(150)].map((v, i) => <FaceIcon style={{color: "blue"}} /> )}
            </Col>

            <Col sm={12} md={3}>
            <Modal.Title>35-39 YEARS OLD</Modal.Title>
            {[...Array(132)].map((v, i) => <FaceIcon style={{color: "blue"}} /> )}
            </Col>

            <Col sm={12} md={3}>
            <Modal.Title>40-44 YEARS OLD</Modal.Title>
            {[...Array(89)].map((v, i) => <FaceIcon style={{color: "blue"}} /> )}
            </Col>

            <Col sm={12} md={3}>
            <Modal.Title>45-49 YEARS OLD</Modal.Title>
            {[...Array(91)].map((v, i) => <FaceIcon style={{color: "blue"}} /> )}
            </Col>

            <Col sm={12} md={3}>
            <Modal.Title>50-54 YEARS OLD</Modal.Title>
            {[...Array(41)].map((v, i) => <FaceIcon style={{color: "blue"}} /> )}
            </Col>

            <Col sm={12} md={3}>
            <Modal.Title>55-59 YEARS OLD</Modal.Title>
            {[...Array(34)].map((v, i) => <FaceIcon style={{color: "blue"}} /> )}
            </Col>

            
            <Col sm={12} md={3}>
            <Modal.Title>60-64 YEARS OLD</Modal.Title>
            {[...Array(30)].map((v, i) => <FaceIcon style={{color: "blue"}} /> )}
            </Col>

                        
            <Col sm={12} md={3}>
            <Modal.Title>65-69 YEARS OLD</Modal.Title>
            {[...Array(7)].map((v, i) => <FaceIcon style={{color: "blue"}} /> )}
            </Col>

                                    
            <Col sm={12} md={3}>
            <Modal.Title>70 YEARS OLD AND OLDER</Modal.Title>
            {[...Array(6)].map((v, i) => <FaceIcon style={{color: "blue"}} /> )}
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