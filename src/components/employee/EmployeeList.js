import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./Employee"
import "./Employee.css"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {

    const { employees, getEmployees, } = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, [])

    const history = useHistory()
    return (
    <>
        <h2>employees</h2>
                <button onClick={() => {history.push("/employees/create")}}>
                    Add Employee
                </button>

        <div className="employees">
            
            {
                employees.map(employee => {
                    return <EmployeeCard key={employee.id} employee={employee} />
                })
            }
        </div>
    </>
        
    )
}