const Boat = ( { task, onDelete, onToggle } ) => {

    return (
        <div id={boatDisplayComponent}>
            <h3>

            {/* {task.text}
            
            <FaTimes style={ {
                color:'red', 
                cursor: 'pointer',
                }}
                onClick= {() => onDelete(task.id)} /> */}
                
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Boat