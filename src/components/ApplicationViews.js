import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { LocationCard } from "./location/Location"
import { EmployeeCard } from "./employee/Employee"

import { AnimalProvider } from './animal/AnimalProvider'
import { AnimalList } from './animal/AnimalList'
import { CustomerList } from "./customer/CustomerList"
import { CustomerProvider } from './customer/CustomerProvider'

export const ApplicationViews = () => {
    return (
        <>
            {/* render the location list when http://localhost:3000/*/}
            <Route exact path="/">
                <Home />
            </Route>

            {/* render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>
            
            

            <Route path="/locations">
                <LocationCard />
                <LocationCard />
                <LocationCard />
            </Route>

            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <Route path="/employees">
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
            </Route>
        </>
    )
}