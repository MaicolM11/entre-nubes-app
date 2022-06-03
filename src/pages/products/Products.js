import React, { useState, useEffect } from "react";
import './Products.css';

import {getAllCategories} from '../../services/category'
import { getAllProducts } from "../../services/product";

import AdminHeader from "../../components/headers/admin-header/AdminHeader";
import IconButton from "../../components/buttons/icon-button/IconButton";
import AddWhite from "../../assets/icons/add-white.svg";
import Category from "../../assets/icons/category-white.svg";
import CardProduct from '../../components/cards/product/CardProduct'

import { ModalCreateProduct } from "../../components/modals/create-product/ModalCreateProduct";
import { ModalCategories } from "../../components/modals/categories/ModalCategories";
import ShowProducts from "../../components/show-products/ShowProducts";

const Products = () => {

    const [openModalCreateProduct, setOpenModalCreateProduct] = useState(false);
    const [openModalCategories, setOpenModalCategories] = useState(false);

    const modalCreateProductState = () => {
        setOpenModalCreateProduct(prev => !prev);
    }

    const modalCategoriesState = () => {
        setOpenModalCategories(prev => !prev);
    }

    const [categories, setCategories] = useState({})
    const [apiProducts, setApiProducts] = useState([])

    const getCategories = () =>{
         getAllCategories().then(
            async res => {
                setCategories(await res.json());
              }
         )
    }

    const getApiProductos = () =>{
        getAllProducts().then(
           async res => {
               let data = setApiProducts(await res.json());
            }
        )
   }

    useEffect(()=>{
        getCategories()
        getApiProductos()
    },[])

    return (
        <div className="products-container">
            <ModalCreateProduct 
            modalData="Agregar Producto" 
            openModal={openModalCreateProduct} 
            setOpenModal={setOpenModalCreateProduct}
            categories={categories}
            setCategories={setCategories} 
            />
            <ModalCategories openModal={openModalCategories} setOpenModal={setOpenModalCategories} />
            <AdminHeader pageTitle="Productos" pageDescription="Información de los productos registrados" />
            <div className="products-center-container">
                <div className="products-options-container">
                    <div className="product-option-buttons-container">
                        <IconButton icon={AddWhite} text="Agregar Producto" theme="ok" size="medium" handleOnClick={modalCreateProductState} />
                        <IconButton icon={Category} text="Categorías" theme="option" size="medium" handleOnClick={modalCategoriesState} />
                    </div>
                </div>
                <div className="product-cards-container">
                    <ShowProducts products={apiProducts}/>
                </div>
            </div>
        </div>
    );
};

export default Products;