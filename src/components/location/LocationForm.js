import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationForm = () => {

    //Get context
    const { getLocations, addLocation, updateLocation, getLocationById } = useContext(LocationContext)

    
    // create state for new location
    const [location, setLocation] = useState({
        name: "",
        address: "",
    })

    const [isLoading, setIsLoading] = useState(true)
    const { locationId } = useParams()
//Allow URL to change
    const history = useHistory()

    useEffect(() => {
        getLocations().then(() => {
            if (locationId) {
                getLocationById(locationId)
                    .then(location => {
                        setLocation(location)
                        setIsLoading(false)
                    })
            } else {
                setIsLoading(false)
            }
        })
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

    const handleSaveLocation = () => {

        // Disable button after first click so it can't be mashed
        setIsLoading(true)
        if (locationId) {
            updateLocation({
                id: location.id,
                name: location.name,
                address: location.address
            }).then(() => history.push(`/locations/detail/${location.id}`))
        } else {
            addLocation({
                name: location.name,
                address: location.address
            }).then(() => history.push("/locations"))
        }
    
    }

    return (
        <form className="locationForm">
            <h2 className="locationForm__title">{locationId ? "Edit Location" : "Add Location"}</h2>
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
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    handleSaveLocation()
                }}>
                {locationId ? "Save Location" : "Add Location"}
            </button>
        </form>
    )
}



