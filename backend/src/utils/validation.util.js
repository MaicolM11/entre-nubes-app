
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
    
    if(Object.keys(product).length > 0 ) 
        return product;
}

export const categoryValidator = (data) => {
    const { name } = data;
    if (validateString(name)) {
        return { name: name };
    }
}

export const userValidator = (data) => {
    let user = {};
    const { fullname, email, password, cc, address, phone, rol } = data;

    if (validateString(fullname)) 
        user.fullname = fullname;
    
    if (validateString(email))
        user.email = email;
    
    if(validateString(password))
        user.password = password;

    if(validateString(cc))
        user.cc = cc;
    
    if(validateString(address))
        user.address = address;

    if(validateString(phone))
        user.phone = phone;

    if(validateString(rol))
        user.rol = rol;

    if(Object.keys(user).length > 0 && user.password) 
        return user;
}

export const validateString = (value) => {
    return value && 
        typeof value === 'string' && value.trim() !== '';
}

export const validateNumber = (value) => {
    return (value || value === 0) && typeof value === 'number';
}
