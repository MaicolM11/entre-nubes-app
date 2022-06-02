import React, { useState } from "react";
import './Products.css';

import AdminHeader from "../../components/headers/admin-header/AdminHeader";
import IconButton from "../../components/buttons/icon-button/IconButton";
import AddWhite from "../../assets/icons/add-white.svg";
import Category from "../../assets/icons/category-white.svg";

import { ModalCreateProduct } from "../../components/modals/create-product/ModalCreateProduct";
import { ModalCategories } from "../../components/modals/categories/ModalCategories";

const Products = () => {

    const [openModalCreateProduct, setOpenModalCreateProduct] = useState(false);
    const [openModalCategories, setOpenModalCategories] = useState(false);

    const modalCreateProductState = () => {
        setOpenModalCreateProduct(prev => !prev);
    }

    const modalCategoriesState = () => {
        setOpenModalCategories(prev => !prev);
    }

    return (
        <div className="products-container">
            <ModalCreateProduct modalData="Agregar Producto" openModal={openModalCreateProduct} setOpenModal={setOpenModalCreateProduct} />
            <ModalCategories openModal={openModalCategories} setOpenModal={setOpenModalCategories} />
            <AdminHeader pageTitle="Productos" pageDescription="Información de los productos registrados" />
            <div className="products-center-container">
                <div className="products-options-container">
                    <div className="product-option-buttons-container">
                        <IconButton icon={AddWhite} text="Agregar Producto" theme="ok" size="medium" handleOnClick={modalCreateProductState} />
                        <IconButton icon={Category} text="Categorías" theme="option" size="medium" handleOnClick={modalCategoriesState} />
                    </div>
                </div>
                <div className="product-cards-container"></div>
            </div>
        </div>
    );
};

export default Products;