import React, { useContext, useEffect } from "react"
// Allows this module to access the components exposed from AnimalProvider
import { AnimalContext } from './AnimalProvider'
import { LocationContext } from '../location/LocationProvider'
import { CustomerContext } from '../customer/CustomerProvider'
import { AnimalCard } from './AnimalCard'
import "./Animal.css"
import { useHistory } from "react-router-dom"

export const AnimalList = () => {

    //This state changes when getAnimals is invoked below
    const { animals, getAnimals, searchTerms } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)



    const [ filteredAnimals, setFiltered ] = useState([])

    // contains method which can change the URL
    const history = useHistory()

    //useEffect - reach out to the world for something that cannot be handled during render
    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getLocations()
        .then(getCustomers)
        .then(getAnimals)
    }, [])

    // Update variable as state changes
    useEffect=(() => {
        if (searchTerms !== "") {
            const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            setFiltered(animals)
        }
    }, [searchTerms, animals])

    
    

    return (
        
        <>
            <h2>Animals</h2>
                <button onClick={() => {history.push("/animals/create")}}>
                    Make Reservation
                </button>
        
            <div className="animals">
                {
                    filteredAnimals.map(animal => {
                        let owner = customers.find(customer => customer.id === animal.customerId)
                            
                        let location = locations.find(location => location.id === animal.locationId)
                            
                    // Gathering relevant objects from database by comparing the animal object foreign key with the private key in its home database

                    
                    // Pass in new data to build your props object
                        return <AnimalCard key={animal.id} location={location} owner={owner} animal={animal} />
                    })
            }
            </div>
        </>
    )

}