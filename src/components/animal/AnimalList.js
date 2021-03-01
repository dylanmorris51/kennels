import React, { useContext, useEffect } from "react"
// Allows this module to access the components exposed from AnimalProvider
import { AnimalContext } from './AnimalProvider'
import { LocationContext } from './location/LocationProvider'
import { CustomerContext } from './customer/CustomerProvider'
import { AnimalCard } from './AnimalCard'
import "./Animal.css"

export const AnimalList = () => {

    //This state changes when getAnimals is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)
    const { LocationContext } = useContext(LocationContext)
    const { CustomerContext } = useContext(CustomerContext)

    //useEffect - reach out to the world for something that cannot be handled during render
    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getLocations()
        .then(getCustomers)
        .then(getAnimals)
    }, [])

    return (
        <div className="animals">
            {console.log("AnimalList: Render", animals)}
            {
                animals.map(animal => {
                    return <AnimalCard key={animal.id} animal={animal} />
                })
            }
        </div>
    )
}