import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider.js"
import "./Product.css"
import { ProductCard } from "./Product.js"

export const ProductList = () => {
  
  // This state changes when `getProducts()` is invoked below
  const { products, getProducts } = useContext(ProductContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    getProducts()
  }, [])


  return (
    <div className="products">
      {
        products.map(product => {
          return <ProductCard key={product.id} product={product} />
        })
      }
    </div>
  )
}
