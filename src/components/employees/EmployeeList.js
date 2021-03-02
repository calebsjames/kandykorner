import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { EmployeeCard } from "../employees/Employee"
import { EmployeeContext } from "./EmployeeProvider.js"
import { LocationContext } from "../locations/LocationProvider"
import "./Employee.css"


export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    getLocations()
    .then(getEmployees)

  }, [])

  const history = useHistory()

  return (
    <>
    <h2>Employees</h2>
        <button onClick={() => {history.push("employees/create")}}>
        Add Employee
      </button>
    <div className="employees">
      
      {
        employees.map(employeeObject => {
          const location = locations.find(l => l.id === employeeObject.locationId)
          return <EmployeeCard key={employeeObject.id} 
            employeeInstance={employeeObject} 
            thisLocation = {location}
        />
        })
      }
    </div>
    </>
  )
}
