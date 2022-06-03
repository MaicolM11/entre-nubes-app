import React from "react";

import CardProduct from "../cards/product/CardProduct";
import './ShowProducts.css'

const ShowProducts = ({products}) =>{
    return(
        <div className="panel-show-products">
            {!(products.length===0)?
            products.map((product,id)=>{
                return (
                    <CardProduct
                    key={id}
                    id = {product._id}
                    url={product.img_url}
                    name={product.brand}
                    price_buy={product.buy_price}
                    price_sale={product.sale_price}
                    category={product.category.name}
                    presentation={product.presentation}
                    units={product.stock} 
                    />
                )
            })
            : <h1>empty</h1>
            }
        </div>
    )
}

export default ShowProducts