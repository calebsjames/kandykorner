import React from "react"
import { useHistory } from "react-router-dom"
import "./Product.css"

const history = useHistory

export const ProductCard = ({product, type}) => (
    
        <section className="product">
            <h3 className="product__name">{product.name}</h3>
            <div className="product__address">{type.name}</div>
            <button onClick={() => {history.push("locations/create")}}>Add to cart</button>
        </section>
)

