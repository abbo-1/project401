import React from 'react';
import {useState} from "react"
import {Button} from 'react-bootstrap';
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




 


    return (
        <div>

        <div>
            { [...Array(1493)].map((v, i) => <FaceIcon /> ) }

            <FaceIcon style={{color: "green"}} />
            <FaceIcon style={{color: "purple"}} />
            <FaceIcon style={{color: "yellow"}}/>
            {showPeople ? <FaceIcon /> : null}
        </div>

        <Button onClick={displayIt}>turtles</Button>
        </div>
    )
};

export default Visualizer