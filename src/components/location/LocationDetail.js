import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {

    const { getLocationById } = useContext(LocationContext)

    const [location, setLocation] = useState({})
        
        const history = useHistory()
        const { locationId } = useParams()

    useEffect(() => {
        getLocationById(locationId)
            .then(response => {
                setLocation(response)
            })
    }, [])

    const employees = location.employees
    const animals = location.animals

    return (
        <section className="location">
            <h2 className="location__name">{location.name}</h2>
            <div className="location__address">{location.address}</div>
            <h3 className="employees">Employees</h3>
            <div className="employees">
                {
                    employees.map(employee => {
                        return <p>{employee.name}</p>
                    }).join(", ")
                }
            </div>
            <h3 className="animals">Current Residents</h3>
            <div className="animals">
                {
                    animals.map(animal => {
                        return <p>{animal.name}</p>
                    })
                }
            </div>
        </section>
    )
}