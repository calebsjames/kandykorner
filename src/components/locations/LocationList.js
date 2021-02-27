import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider.js"
import "./Location.css"
import { LocationCard } from "./Location.js"

export const LocationList = () => {
  
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    getLocations()
  }, [])


  return (
    <div className="locations">
      {
        locations.map(location => {
          return <LocationCard key={location.id} location={location} />
        })
      }
    </div>
  )
}
