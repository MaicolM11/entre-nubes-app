import React from "react";
import Input  from "../input/Input";
import Button from "../Button/Button";

import './AppProductModal.css'

const AppProductModal = ({product,actualUnits}) =>{
    return(
        <div className="content">
            <h1>Producto : {product}</h1>
            <h2>Unidades actuales: {actualUnits}</h2>
            <Input 
            type='text'
            name= 'stock'
            placeholder='Unidades para stock'
            />

            <Button
            text= 'Agregar Unidades' color='#2CE74A' 
            width={170} height={45}
            />

        </div>
    )
}

export default AppProductModal