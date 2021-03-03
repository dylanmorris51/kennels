import React, { useState, createContext } from "react"


// Always do this when making a data provider in React
export const AnimalContext = createContext()


//Define data provider component that will allow other components to use the data stored in the context
export const AnimalProvider = (props) => {
    
    //Holds the state of the component and a function that updates it
    const [animals, setAnimals] = useState([])

    //Defining fetch call within module scope so it can be exported
    const getAnimals = () => {
        return fetch("http://localhost:8088/animals?_expand=location")
        .then(res => res.json())
        .then(setAnimals)
    }
    // Defining post so it can be exported
    const addAnimal = animalObj => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalObj)
        })
        .then(getAnimals)
    }
    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */

    const getAnimalById = (id) => {
        return fetch(`http://localhost:8088/animals/${id}?_expand=location&_expand=customer`)
            .then(res => res.json())
    }

    const releaseAnimal = animalId => {
        return fetch (`http://localhost:8088/animals/${animalId}`, {
            method: "DELETE"
        })
        .then(getAnimals)
    }

    const updateAnimal = animal => {
        return fetch(`http://localhost:8088/animals/${animal.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(getAnimals)
    }


    //This component exposes the following to other components
    return (
        <AnimalContext.Provider value={{
            animals, getAnimals, addAnimal, getAnimalById, releaseAnimal, updateAnimal
        }}>
            {props.children}
        </AnimalContext.Provider>
    )

}
