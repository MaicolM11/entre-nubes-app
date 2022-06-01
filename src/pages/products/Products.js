import React from "react";
import './Products.css';

import HeaderProducts from "../../components/headers/headerProducts/HeaderProducts";

const Products = () => {
    return (
        <div className="productContent">
            <div className="headerProduct">
                <HeaderProducts />
            </div>
        </div>
    );
};

export default Products;