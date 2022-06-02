import React from "react";
import './Select.css'
import { SelectStyle } from "./SelectStyle";

const Select = ({ size, categories }) => {

    return (
        <div>
            <select defaultValue="">
                <option value="" disabled>
                    Choose a salutation ...
                </option>
                <option value="1">Mr</option>
                <option value="2">Mrs</option>
                <option value="3">Ms</option>
                <option value="4">Miss</option>
                <option value="5">Dr</option>
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