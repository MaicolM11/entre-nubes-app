import React from "react";
import Input  from "../input/Input";
import Button from "../Button/Button";

import './AddProductModal.css'

const AppProductModal = ({product,actualUnits}) =>{
    return(
        <div className="contentAddProduct">
            <h1>Producto : {product}</h1>
            <h2>Unidades actuales: {actualUnits}</h2>
            <div className="inputUnits">
                <Input 
                type='text'
                name= 'stock'
                placeholder='Unidades para stock'
                />
            </div>

            <div className="buttonUnits">
                <Button
                text= 'Agregar Unidades' color='#2CE74A' 
                width={170} height={45}
                />
            </div>

        </div>
    )
}

export default AppProductModal