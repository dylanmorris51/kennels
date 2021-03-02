import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"
import "./animal/Animal.css"
import { AnimalCard } from './animal/AnimalCard'
import { EmployeeCard } from "./employee/Employee"
import { LocationCard } from "./location/Location"
import { CustomerCard } from "./customer/Customer"
import { PropsAndState } from "./PropsAndState"
import { Home } from "./Home"
import { Link } from "react-router-dom"
import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const Kennel = () => (
    <>
        <Route 
            render={() => {
                if (localStorage.getItem("kennel_customer")) {
                    return (
                        <>
                            <NavBar />
                            <ApplicationViews />                
                        </>
                    )
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />

        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
    </>
)


