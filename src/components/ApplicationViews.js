import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"


import { AnimalProvider } from './animal/AnimalProvider'
import { AnimalList } from './animal/AnimalList'
import { CustomerProvider } from './customer/CustomerProvider'
import { CustomerList } from "./customer/CustomerList"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { AnimalForm } from "./animal/AnimalForm"
import { EmployeeForm } from "./employee/EmployeeForm"
import { LocationForm } from "./location/LocationForm"
import { AnimalDetail } from "./animal/AnimalDetail"
import { EmployeeDetail } from "./employee/EmployeeDetail"

export const ApplicationViews = () => {
    return (
        <>
            {/* render the location list when http://localhost:3000/*/}
            <Route exact path="/">
                <Home />
            </Route>

            {/* render the animal list when http://localhost:3000/animals */}
            {/* Form Tag Needs Context From Multiple Sources */}           
            
            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals">
                            <AnimalList />
                        </Route>
                        
                        <Route exact path="/animals/create">
                            <AnimalForm />
                        </Route>

                        <Route exact path="/animals/detail/:animalId(\d+)">
                            <AnimalDetail />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>
            
            <LocationProvider>
                <Route path="/locations">
                    <LocationList />
                </Route>
                <Route exact path="/locations/create">
                    <LocationForm />
                </Route>
            </LocationProvider>

            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                <LocationProvider>
                    <Route path="/employees">
                        <EmployeeList />
                    </Route>
                    <Route exact path="/employees/create">
                        <EmployeeForm />
                    </Route>

                    <Route exact path="/employee/detail/:employeeId(\d+)">
                        <EmployeeDetail />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>

        </>
    )
}