import React from "react";
import TextInput from "../../inputs/TextInput";

import { Button } from "../../buttons/button/Button";

import './AddProductStockModal.css';


const AddProductStockModal = ({ product, actualUnits, icon, onChangeData, sendData }) => {
    return (
        <div className="modal-container">
            <div className="contentAddProduct">
            <div className="exit-modal-content">
                <button className="exit-modal-stock">X</button>
            </div>
                <div className="content-info">
                    <h1 className="name-product">Producto : {product}</h1>
                    <h2 className="units-product">Unidades actuales: {actualUnits}</h2>
                </div>
                <div className="inputUnits">
                    <TextInput
                        type="text"
                        name="stock"
                        icon={icon}
                        placeholder="Unidades para stock"
                        onChange={onChangeData} />
                </div>

                <div className="buttonUnits">
                    <Button theme="ok" size="medium" onClick={sendData}>Agregar Unidades</Button>
                </div>

            </div>
        </div>
    );
};

export default AddProductStockModal