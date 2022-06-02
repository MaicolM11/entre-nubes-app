import React, { useState } from "react";
import './Products.css';

import AdminHeader from "../../components/headers/admin-header/AdminHeader";
import IconButton from "../../components/buttons/icon-button/IconButton";
import AddWhite from "../../assets/icons/add-white.svg";
import Category from "../../assets/icons/category-white.svg";

import { ModalCreateProduct } from "../../components/modals/create-product/ModalCreateProduct";

const Products = () => {

    const [openModal, setOpenModal] = useState(false);

    const modalState = () => {
        setOpenModal(prev => !prev);
    }

    return (
        <div className="products-container">
            <ModalCreateProduct modalData="Agregar Producto" openModal={openModal} setOpenModal={setOpenModal} />
            <AdminHeader pageTitle="Productos" pageDescription="Información de los productos registrados" />
            <div className="products-center-container">
                <div className="products-options-container">
                    <div className="product-option-buttons-container">
                        <IconButton icon={AddWhite} text="Agregar Producto" theme="ok" size="medium" handleOnClick={modalState} />
                        <IconButton icon={Category} text="Categorías" theme="option" size="medium" />
                    </div>
                </div>
                <div className="product-cards-container"></div>
            </div>
        </div>
    );
};

/*
<ModalCreateProduct openModal={openModal} setOpenModal={setOpenModal} />
*/

export default Products;