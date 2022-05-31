import React from "react";
import './CategoryTarget.css'

const CategoryTarget = ({categoryName}) =>{
    return(
        <div className="contentTargetCategory">
            <h1>{categoryName}</h1>
            <button>edit</button>
            <button>delete</button>
        </div>
    )
}

export default CategoryTarget