import React from 'react';
import "./Homepage.css";

import { Routes, Route } from 'react-router-dom';

import AdminMenu from "../../components/menus/admin/Menu";
import Orders from '../orders/Orders';
import Products from '../products/Products';

const Homepage = () => {
    return (
        <div className='homepage-container'>
            <AdminMenu />
            <div className='pages-container'>
                <Routes>
                    <Route path="orders" element={<Orders />} />
                    <Route path="products" element={<Products />} />
                </Routes>
            </div>
        </div>
    );
};

export default Homepage;