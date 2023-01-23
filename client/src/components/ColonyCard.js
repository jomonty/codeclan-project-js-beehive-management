import { Link } from 'react-router-dom'
import SingleColony from "./SingleColony"
import BeeServices from '../services/BeeService'

const ColonyCard = ({colony,index}) => {
    const findTheColony = async() =>{
        const data = await BeeServices.getApiaries()
        const findColony = data.map(element => {
            return (element['colonies'].find(colonyElement => colonyElement['name'] == colony.name))
        });

        return findColony[0]
    }
    
    
    const handleClick = async() => {
        const theColony = await findTheColony()
        BeeServices.deleteColonies(theColony.parent_id, theColony._id)
        window.location.reload(false)
    }
    return (
        <>
        <ul>
            <li>
                Colony Name: {colony.name}<br/>
                Queen Name: {colony.queenName}<br/>
                <button onClick={handleClick}>Remove Colony</button>
            </li>
        </ul>
        <SingleColony colony={colony}/>
        </>
    )
}

export default ColonyCard