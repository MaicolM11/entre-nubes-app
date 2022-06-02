import React from 'react';
import "./AdminHeader.css";

const AdminHeader = ({ pageTitle, pageDescription }) => {
    return (
        <div className='admin-header-container'>
            <label className='page-title'>{pageTitle}</label>
            <div className='separator-title' />
            <label className='page-description'>{pageDescription}</label>
        </div>
    );
};

export default AdminHeader;