import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data. This is global
export const ProductTypeContext = createContext()

// This component establishes what data can be used.
export const ProductTypeProvider = (props) => {
        /* useState() is returning an array. 
    locations is a constant variable and setProductTypes is a function*/
    const [productTypes, setProductTypes] = useState([])
    

    const getProductTypes = () => {
        return fetch("http://localhost:8088/productType")
        .then(res => res.json())
        .then(setProductTypes)
    }

    const addProductType = productTypeObj => {
        return fetch("http://localhost:8088/productType", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productTypeObj)
        })
        .then(getProductTypes)
    }

    /*
        You return a context provider which has the
        `productTypes` state, `getProductTypes` function,
        and the `addProductType` function as keys. This
        allows any child elements to access them.
    */
    return (
        <ProductTypeContext.Provider value={{
            productTypes, getProductTypes, addProductType
        }}>
            {props.children}
        </ProductTypeContext.Provider>
    )
}