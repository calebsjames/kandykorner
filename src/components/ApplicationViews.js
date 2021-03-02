import React from "react"
import { Route } from "react-router-dom"
import { EmployeeForm } from "./employees/EmployeeForm"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { ProductList } from "./products/ProductList"
import { ProductProvider } from "./products/ProductProvider"
import { ProductTypeProvider } from "./productType/ProductTypeProvider"




export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            {/* <Route exact path="/">
                <Home />
            </Route> */}

            {/* Render the location list when http://localhost:3000/locations */}
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>
            {/* Render the product list when http://localhost:3000/products */}
            <ProductProvider>
                <ProductTypeProvider>
                    <Route exact path="/products">
                        <ProductList />
                    </Route>
                </ProductTypeProvider>    
            </ProductProvider>
            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees">
                        <EmployeeList />
                    </Route>
                    <Route exact path="/employees/create">
                        <EmployeeForm />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}

