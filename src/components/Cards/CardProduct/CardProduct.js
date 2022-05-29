import React from "react";
import './CardProduct.css'

const CardProduct = ({url, name, price,category, description, units, unitsSale}) =>{

    return(
        <div className="Card-Product">
            <div className="ImgContainer">
            <img src= {url} alt="X"></img>
            </div>
            <h1>{name}</h1>
            <h2>Precio por Unidad : $ {price}</h2>
            <div className="category-cont">{category}</div>
            <p>{description}</p>
            <h3>Unidades: {units}</h3>
            <h3>Unidades en venta: {unitsSale}</h3>
            <div className="buttons">
                <button className="units">
                    Unidades
                </button>
                <button className="edit">
                   Editar
                </button>
                <button className="delete">
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default CardProduct