import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const OrderHistoryContext = createContext()

// This component establishes what data can be used.
export const OrderHistoryProvider = (props) => {
    const [orderHistories, setOrderHistories] = useState([])
    

    const getOrderHistories = () => {
        return fetch("http://localhost:8088/orderHistories")
        .then(res => res.json())
        .then(setOrderHistories)
    }

    const addOrderHistory = orderHistoryObj => {
        return fetch("http://localhost:8088/orderHistories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderHistoryObj)
        })
        .then(getOrderHistories)
    }

    /*
        You return a context provider which has the
        `orderHistories` state, `getOrderHistories` function,
        and the `addOrderHistory` function as keys. This
        allows any child elements to access them.
    */
    return (
        <OrderHistoryContext.Provider value={{
            orderHistories, getOrderHistories, addOrderHistory
        }}>
            {props.children}
        </OrderHistoryContext.Provider>
    )
}