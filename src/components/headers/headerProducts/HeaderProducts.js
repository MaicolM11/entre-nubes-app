import React from "react";
import './HeaderProducts.css'
import {Button} from '../../buttons/button/Button'

const HeaderProducts = () =>{
    return(
        <div>
            <div className="description">
                <h1 className="title">PRODUCTOS</h1>
                <h1 className="descriptionText">Informacion de los productos registrados</h1>
            </div>
            <div className="buttonsHeader">
                <Button
                 theme="ok" size="medium"
                >+ Agregar producto</Button>
                 <Button
                 theme="option" size="medium"
                >Categorias</Button>
            </div>
        </div>
    )
}

export default HeaderProducts