import React from "react";
import './Select.css'
import { SelectStyle } from "./SelectStyle";

const Select = ({ size, name, categories, onChange }) => {

    return (
        <div>
            <select defaultValue="Categorias" name={name} 
                    onChange={onChange}>
                {categories.map((category,i)=>{
                    return(
                        <option key={i} value={category._id} >
                               {category.name} 
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

/*
<SelectStyle size={size}>
                <option value="" selected disabled hidden>Categoría</option>
            </SelectStyle>
*/

export default Select