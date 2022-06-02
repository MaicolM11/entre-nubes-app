
export const productValidator = (data) => {
    let product = {};

    const { brand, category, buy_price, sale_price, 
        presentation, stock, img_url } = data;
    
    if(validateString(brand)) 
        product.brand = brand;

    if(validateString(presentation)) 
        product.presentation = presentation;

    if(validateString(img_url)) 
        product.img_url = img_url;

    if(validateString(category) && category.match(/^[0-9a-fA-F]{24}$/))
        product.category = category;
    
    if(validateNumber(buy_price)) 
        product.buy_price = buy_price;

    if(validateNumber(sale_price))
        product.sale_price = sale_price;

    if(validateNumber(stock))
        product.stock = stock;
    
    if(Object.keys(product).length > 0) 
        return product;
}

export const categoryValidator = (data) => {
    const { name } = data;
    if (validateString(name)) {
        return { name: name };
    }
}

const validateString = (value) => {
    return value && 
        typeof value === 'string' && value.trim() !== '';
}

const validateNumber = (value) => {
    return (value || value === 0) && typeof value === 'number';
}