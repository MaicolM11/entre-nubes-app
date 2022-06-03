import React from "react";

const ShowProducts = ({products}) =>{
    return(
        <div>
            {products.map((product)=>{
                return (
                    <CardProduct
                    url={product.img_url}
                    name={product.brand}
                    price_buy={product.buy_price}
                    price_sale={product.sale_price}
                    category={product.category}
                    presentation={product.presentation}
                    units={product.stock} 
                    />
                )
            })}
        </div>
    )
}

export default ShowProducts