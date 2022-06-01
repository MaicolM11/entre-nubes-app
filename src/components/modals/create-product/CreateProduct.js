import React from "react";

import { Button } from '../../buttons/button/Button'
import TextInput from '../../inputs/TextInput'
import Select from '../../select/Select'

import '../styles/ModalStyles.css'
import './CreateProduct.css'

const CreateProduct = ({ title, nameButton }) => {
    return (
        <div className="modal-container">
            <div className="add-producto-container">
                <h1 className="add-title">{title}</h1>
                <div className="inputs">
                    <img className="image-product"></img>
                    <div className="inputs-container">
                        <TextInput
                            type='medium' name='add-product'
                            placeholder='Nombre del producto' onChange />
                        <Select
                            size="normal"
                        />
                        <TextInput
                            type='medium' name='price-product'
                            placeholder='Precio por unidad' onChange />
                        <TextInput
                            type='medium' name='units-product'
                            placeholder='Unidades de venta' onChange />
                        <h2>Descripción del producto </h2>
                        <textarea></textarea>

                    </div>
                </div>
                <div className="button-create">
                <Button
                    theme="ok" size="normal">
                    {nameButton}
                </Button>
                </div>
            </div>
        </div>
    )
}

export default CreateProduct