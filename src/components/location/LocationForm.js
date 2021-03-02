import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import { useHistory } from "react-router-dom"
import "./Location.css"

export const LocationForm = () => {

    //Get context
    const { locations, getLocations, addLocation } = useContext(LocationContext)

    
    // create state for new location
    const [location, setLocation] = useState({
        name: "",
        address: "",
    })

    //Allow URL to change
    const history = useHistory()

    useEffect(() => {
        getLocations()
    }, [])

    const handleControlledInputChange = event => {

        const newLocation = {...location}
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newLocation[event.target.id] = selectedVal

        setLocation(newLocation)
    }

    const handleClickSaveLocation = event => {

        event.preventDefault()

        addLocation(location)
            .then(() => history.push("/locations"))
    
    }

    return (
        <form className="locationForm">
            <h2 className="locationForm__title">New Location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={location.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Location address:</label>
                    <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location address" value={location.address} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                onClick={handleClickSaveLocation}>
                Save location
            </button>
        </form>
    )
}



