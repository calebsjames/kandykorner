import React from "react"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"


export const KandyKorner = () => (
    <>
    <LocationProvider>
        <LocationList />
    </LocationProvider>  
    </>
)