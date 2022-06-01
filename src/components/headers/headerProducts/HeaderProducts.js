import React from "react";
import './HeaderProducts.css'
import { Button } from '../../buttons/button/Button'
import TextInput from "../../inputs/TextInput";
import SearchInput from "../../inputs/SearchInput";

const HeaderProducts = () => {
    return (
        <div>
            <div className="description">
                <h1 className="title">Productos</h1>
                <h1 className="descriptionText">Información de los productos registrados</h1>
            </div>
            <div className="buttonsHeader">
                <Button theme="ok" size="medium">+ Agregar producto</Button>
                <Button theme="option" size="medium">Categorías</Button>
                <div className="searchProduct">
                    <SearchInput placeholder='Buscar' />
                </div>
                <select className="selectCategory">
                    <option value="" selected disabled hidden>Categoría</option>
                </select>
            </div>
        </div>
    );
};

export default HeaderProducts;