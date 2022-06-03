import React from "react";
import './CategoryTarget.css';

const CategoryTarget = ({ categoryName }) => {
    return (
        <div className="category-card-container">
            <label className="category-name">{categoryName}</label>
            <div className="category-card-buttons">
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>
    );
};

export default CategoryTarget;