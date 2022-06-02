import React from "react";
import './Products.css';

import AdminHeader from "../../components/headers/admin-header/AdminHeader";
import IconButton from "../../components/buttons/icon-button/IconButton";
import AddWhite from "../../assets/icons/add-white.svg";
import Category from "../../assets/icons/category-white.svg";

const Products = () => {
    return (
        <div className="products-container">
            <AdminHeader pageTitle="Productos" pageDescription="Información de los productos registrados" />
            <div className="products-center-container">
                <div className="products-options-container">
                    <div className="product-option-buttons-container">
                        <IconButton icon={AddWhite} text="Agregar Producto" theme="ok" size="medium" />
                        <IconButton icon={Category} text="Categorías" theme="option" size="medium" />
                    </div>
                </div>
                <div className="product-cards-container"></div>
            </div>
        </div>
    );
};

export default Products;