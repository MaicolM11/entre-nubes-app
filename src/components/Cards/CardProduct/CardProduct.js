import React from "react";
import './CardProduct.css'

const CardProduct = ({name, price, description, units, unitsSale}) =>{

    const url = require("https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png")

    return(
        <div className="Card-Product">
            <div className="ImgContainer">
            <image src= {url}  width="100px"></image>
            </div>
            <h1>{name}</h1>
            <h2>Precio por Unidad : $ {price}</h2>
            <p>{description}</p>
            <h3>Unidades: {units}</h3>
            <h3>Unidades en venta: {unitsSale}</h3>
        </div>
    )
}

export default CardProduct