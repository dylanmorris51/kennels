import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animal/AnimalCard"
import { LocationCard } from "./location/Location"
import { EmployeeCard } from "./employee/Employee"
import { CustomerCard } from "./customer/Customer"

export const ApplicationViews = () => {
    return (
        <>
            {/* render the location list when http://localhost:3000/*/}
            <Route exact path="/">
                <Home />
            </Route>

            {/* render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <AnimalCard />
                <AnimalCard />
                <AnimalCard />
            </Route>

            <Route path="/locations">
                <LocationCard />
                <LocationCard />
                <LocationCard />
            </Route>

            <Route path="/customers">
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
            </Route>

            <Route path="/employees">
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
            </Route>
        </>
    )
}