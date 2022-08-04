export const validateString = (value) => {
    return value && 
        typeof value === 'string' && value.trim() !== '';
}

export const validateNumber = (value) => {
    return (value || value === 0) && typeof value === 'number';
}

export const isDate = (date) => {
    return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}