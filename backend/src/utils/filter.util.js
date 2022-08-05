import { isDate, validateString } from "./validation.util";

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

export const reportFilter = (filter) => {
    let newFilter = [];
    const { start_date, end_date } = filter;
    if(start_date && isDate(start_date)) {
        let sd = new Date(start_date)
        newFilter.push({ start_date: { $gte: sd }})
    }
    if(end_date && isDate(end_date)) {
        let ed = new Date(end_date);
        ed.setDate(ed.getDate() + 1);
        newFilter.push({ end_date: { $lte: ed } })
    }
    return { $and: newFilter };
}