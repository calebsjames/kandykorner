import React, { useContext, useEffect, useState } from "react"
import { useHistory } from 'react-router-dom';
import { LocationContext } from "../locations/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"

export const EmployeeForm = () => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)


    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [employee, setEmployee] = useState({
      name: "",
      locationId: 0,
      manager: false,
      fullTime: false,
      hourlyRate: 0

    });

    const history = useHistory();

    /*
    Reach out to the world and get customers state
    and locations state on initialization, so we can provide their data in the form dropdowns
    */
    useEffect(() => {
      getLocations()
    }, [])

    //when a field changes, update state. The return will re-render and display based on the values in state
        // NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
    //Controlled component
    const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newEmployee = { ...employee }
      let selectedVal = event.target.value
      // forms always provide values as strings. But we want to save the ids as numbers. This will cover both customer and location ids
      if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
      }

      if (event.target.id.includes("Rate")) {
        selectedVal = parseInt(selectedVal)
      }
      if (selectedVal === "yes") {
        selectedVal = true
      }

      
      /* Employee is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newEmployee[event.target.id] = selectedVal
      // update state
      setEmployee(newEmployee)
    }

    const handleClickSaveEmployee = (event) => {
      event.preventDefault() //Prevents the browser from submitting the form

      const locationId = employee.locationId
      

      if (locationId === 0) {
        window.alert("Please select a location")
      } else {
        //invoke addEmployee passing employee as an argument.
        //once complete, change the url and display the employee list
        addEmployee(employee)
        .then(() => history.push("/employees"))
      }
    }

    return (
      <form className="employeeForm">
          <h2 className="employeeForm__title">New Employee</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Employee name:</label>
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name}/>
              </div>
          </fieldset>
          
          <fieldset>
              <div className="form-group">
                  <label htmlFor="location">Assign to location: </label>
                  <select defaultValue={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                      <option value="0">Select a location</option>
                      {locations.map(l => (
                          <option key={l.id} value={l.id}>
                              {l.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
          
          <fieldset>
              <div className="form-group">
                  <label htmlFor="manager">Manager:</label>
                  <select defaultValue={employee.manager} name="manager" id="manager" onChange={handleControlledInputChange} className="form-control" >
                      <option value="0">Please select...</option>           
                          <option value="yes">Yes</option>
                          <option value="no">No</option>   
                  </select>
                  
                  
              </div>
          </fieldset>

          <fieldset>
              <div className="form-group">
                  <label htmlFor="fullTime">Full Time:</label>
                  <select defaultValue={employee.fullTime} name="fullTime" id="fullTime" onChange={handleControlledInputChange} className="form-control" >
                      <option value="0">Please select...</option>           
                          <option value="yes">Yes</option>
                          <option value="no">No</option>   
                  </select>
                  
                  
              </div>
          </fieldset>

          <fieldset>
              <div className="form-group">
                  <label htmlFor="hourlyRate">Hourly Rate:</label>
                  <input type="text" id="hourlyRate" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Hourly Rate" value={employee.hourlyRate}/>
              </div>
          </fieldset>
          
          <button className="btn btn-primary"
            onClick={handleClickSaveEmployee}>
            Save Employee
          </button>
      </form>
    )
}