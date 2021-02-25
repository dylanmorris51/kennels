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

export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />                
    </>
)
    

