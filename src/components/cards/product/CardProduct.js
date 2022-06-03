import React from "react";
import { Button } from "../../buttons/button/Button";
import './CardProduct.css'

const CardProduct = ({ url,name,price_buy,price_sale,category,
presentation, units }) => {

    return (
        <div className="Card-Product">
            <div className="ImgContainer">
                <img src={url} alt="X"></img>
            </div>
            <h1 className="name">{name}</h1>
            <div className="category-cont">{category}</div>
            <h2 className="unit-Price">Precio por Unidad : $ {price_buy}</h2>
                <h3 className="footer-text">Precio de venta : {price_sale}</h3>
                <p className="descriptionTarget">{presentation}</p>
                <h3 className="footer-text">Unidades: {units}</h3>
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