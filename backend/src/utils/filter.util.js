import { validateString } from "./validation.util";

export const userFilter = (filter) => {
    let newFilter = {};
    if(validateString(filter.fullname))
        newFilter.fullname = { $regex: filter.fullname,$options: "i" }
    return newFilter;
}

export const productFilter = (filter) => {
    let newFilter = {};
    if(validateString(filter.brand))
        newFilter.brand = { $regex: filter.brand, $options: "i" }
    if(validateString(filter.category))
        newFilter.category = filter.category
    return newFilter;
}