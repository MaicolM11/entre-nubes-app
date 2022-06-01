import React from "react";
import './Select.css'
import { SelectStyle } from "./SelectStyle";

const Select = ({size,categories}) => {

    return (
        <div>
            <SelectStyle size={size}>
                <option value="" selected disabled hidden>Categoría</option>
            </SelectStyle>
           
        </div>
    )
}

export default Select