import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import "./Animal.css"
import { useHistory } from 'react-router-dom'

// Render form with dropdowns
export const AnimalForm = () => {
    const { addAnimal } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    /* With react we do NOT target the dom with querySelector(). Instead, our render reacts to STATE or PROPS

    Define the initial state of the form inputs with useState()
    */
    
    const [animal, setAnimal] = useState({
        name: "",
        locationId: 0,
        customerId: 0
    });

    const history = useHistory()

    /* 
    Reach out to the world and get customers state and locations state on initialization
    */

    useEffect(() => {
        getCustomers().then(getLocations)
    }, [])

    // When a field changes, update state. The return will re-render and display based on values in state
    // controlled component
    const handleControlledInputChange = (event) => {
        /* When changing a state object or array, always create a copy, make changes, then set state */
        const newAnimal = { ...animal}

        /* Animal is an object with properties. Set the property to the new value using object bracket notation. */
        newAnimal[event.target.id] = event.target.value

        setAnimal(newAnimal)
    }

    const handleClickSaveAnimal = (event) => {
        event.preventDefault() // prevents browser from submitting the form

        const locationId = parseInt(animal.locationId)
        const customerId = parseint(animal.customerId)

        if (locationId === 0){
            window.alert("Please select a location")
        } else {
            //invoke addAnimal passing animal as an argument
            //once complete, change the url and display the animal list
            addAnimal(animal)
                .then(() => history.push("/animals"))
        }
    }

    return (
        <form className="animalForm">
            <h2 className="animalForm__title">New Animal</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Animal name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal name" value={animal.name}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue={animal.locationId} name="locationId" id="locationId" className="form-control">
                        <option value = "0">Select a location</option>
                        {
                            locations.map(l => (
                                <option key={l.id} value={l.id}>{l.name}</option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="customerId">Customer: </label>
                    <select defaultValue={animal.customerId} name="customer" id="customerId" className="form-control">
                        <option value="0">Select a customer</option>
                        {customers.map(c => {
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        })}
                    </select>
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={handleClickSaveAnimal}>Save Animal</button>
        </form>
    )

}