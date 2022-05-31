import React from "react";
import './CategoryTarget.css'

const CategoryTarget = ({categoryName}) =>{
    return(
        <div className="contentTargetCategory">
            <label className="labelText">{categoryName}</label>
            <button>edit</button>
            <button>delete</button>
        </div>
    )
}

export default CategoryTarget