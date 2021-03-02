import React from "react"

import "./Employee.css"


export const EmployeeCard = ({employeeInstance, thisLocation}) => (
        <section className="employee">
            <h3 className="employee__name">{employeeInstance.name}</h3>
            <div className="employee__location">{thisLocation.name}</div>
        </section>
)


    
