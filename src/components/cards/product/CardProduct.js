import React from "react";
import { Button } from "../../buttons/button/Button";
import './CardProduct.css'

const CardProduct = ({ url, name, price, category, description, units, unitsSale }) => {

    return (
        <div className="Card-Product">
            <div className="ImgContainer">
                <img src={url} alt="X"></img>
            </div>
            <h1 className="name">{name}</h1>
            <h2 className="unit-Price">Precio por Unidad : $ {price}</h2>
            <div className="category-cont">{category}</div>
            
                <p className="descriptionTarget">{description}</p>
                <h3 className="footer-text">Unidades: {units}</h3>
                <h3 className="footer-text">Unidades en venta: {unitsSale}</h3>
                <div className="buttons">
                    <Button theme="option" size="miniSmall"  >
                        Unidades
                    </Button>
                    <Button theme="edit" size="miniSmall">
                        Editar
                    </Button>
                    <Button theme="delete" size="miniSmall">
                        Eliminar
                    </Button>
                </div>
        </div>
    )
}

export default CardProduct