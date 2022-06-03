import React from "react";

import CardProduct from "../cards/product/CardProduct";

const ShowProducts = ({products}) =>{
    return(
        <div>
            {!(products.length===0)?
            products.map((product)=>{
                return (
                    <CardProduct
                    url={product.img_url}
                    name={product.brand}
                    price_buy={product.buy_price}
                    price_sale={product.sale_price}
                    // category={product.category}
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