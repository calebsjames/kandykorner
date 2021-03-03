import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider.js"
import "./Product.css"
import { ProductCard } from "./Product.js"
import { ProductTypeContext } from "../productType/ProductTypeProvider.js"
import { useHistory } from "react-router-dom"
export const ProductList = () => {
  
  // This state changes when `getProducts()` is invoked below
  const { products, getProducts } = useContext(ProductContext)
  const { productTypes, getProductTypes } = useContext(ProductTypeContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    getProductTypes()
    .then(getProducts)
  }, [])

  const history = useHistory()

  return (
    <>
    <div className="products">
      {products.map(productObject => {
          const productType = productTypes.find(pt => pt.id === productObject.productTypeId)
          return <ProductCard key={productObject.id} 
          type = {productType}
          product={productObject} 
          />
        })
    }
    </div>
    </>
  )
}
