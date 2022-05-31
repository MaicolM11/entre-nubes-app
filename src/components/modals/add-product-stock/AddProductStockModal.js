import React from "react";
import TextInput from "../../inputs/TextInput";

import { Button } from "../../buttons/button/Button";

import './AddProductStockModal.css';


const AppProductModal = ({ product, actualUnits, icon, onChangeData }) => {
    return (
        <div className="modal-container">
            <div className="contentAddProduct">
                <h1>Producto : {product}</h1>
                <h2>Unidades actuales: {actualUnits}</h2>
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

export default AppProductModal