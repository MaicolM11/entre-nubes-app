import React from "react";
import './Products.css';

import AdminMenu from "../../components/menus/admin/Menu";
import HeaderProducts from "../../components/headers/headerProducts/HeaderProducts";

const Products = () => {
    return (
        <div className="productContent">
            <AdminMenu />
        </div>
    );
    /*<div className="headerProduct">
        <HeaderProducts />
    </div>*/
};

export default Products;