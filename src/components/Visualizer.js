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


    return (
        <div>

        <div
          show={showPeople} 
          onHide={handleClosePeople}>
        <FaceIcon />
        </div>

        <Button onClick={handleShowPeople}>test</Button>
        </div>
    )
};

export default Visualizer