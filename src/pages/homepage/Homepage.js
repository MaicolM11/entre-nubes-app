import React from 'react';
import "./Homepage.css";

import { Routes, Route } from 'react-router-dom';

import AdminMenu from "../../components/menus/admin/Menu";
import Orders from '../orders/Orders';
import Reports from '../reports/Reports';
import Products from '../products/Products';
import Employees from '../employees/Employees';
import Boliranas from '../boliranas/Boliranas';

const Homepage = () => {
    return (
        <div className='homepage-container'>
            <AdminMenu />
            <div className='pages-container'>
                <Routes>
                    <Route path="orders" element={<Orders />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="products" element={<Products />} />
                    <Route path="employees" element={<Employees />} />
                    <Route path="boliranas" element={<Boliranas />} />
                </Routes>
            </div>
        </div>
    );
};

export default Homepage;