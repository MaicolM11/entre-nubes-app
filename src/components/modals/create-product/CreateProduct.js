import React from "react";

import TextInput from '../../inputs/TextInput'
import Select from '../../select/Select'

import '../styles/ModalStyles.css'
import './CreateProduct.css'

const CreateProduct = () => {
    return (
        <div className="modal-container">
            <div className="add-producto-container">
                <h1 className="add-title">Agregar producto</h1>
                <div className="inputs">
                    <img className="image-product"></img>
                    <div className="inputs-container">
                        <TextInput
                            type='medium' name='add-product'
                            placeholder='Nombre del producto' onChange />
                        
                        <Select
                            size = "normal"
                        />

                        <TextInput
                            type='medium' name='price-product'
                            placeholder='Precio por unidad' onChange />

                        <TextInput
                            type='medium' name='units-product'
                            placeholder='Unidades de venta' onChange />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateProduct