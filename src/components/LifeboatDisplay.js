import Boat from './Boat'

const LifeboatDisplay = ({ chosenBoat }) => {

    return (
        <>
        {chosenBoat.map((Boat) => (

        <Boat key={chosenBoat.id} 
        name={chosenBoat.name} 
        gender={chosenBoat.gender} 
        age={chosenBoat.age} 
        class={chosenBoat.class} 
        />
        
        ))}
        </>
    )}

export default LifeboatDisplay