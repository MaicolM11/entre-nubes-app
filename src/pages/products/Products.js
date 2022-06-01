import React from "react";
import HeaderProducts from "../../components/headers/headerProducts/HeaderProducts";
import './Products.css'

const Products = ()=>{
    return(
        <div className="productContent">
            <div className="menuProduct">
            </div>
            <div className="headerProduct">
            <HeaderProducts/>
            </div>
        </div>
    )
}

export default Products