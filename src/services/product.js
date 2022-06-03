import { getToken } from './token'

const BASE_URL = '/api/product';

export const getAllProducts = () => {
    const requestOptions = { 
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'authorization': getToken() }
    };
    return fetch(BASE_URL, requestOptions);
}

export const reqProduct = (brand,category,buy_price,sale_price,presentation,stock,img_url) =>{
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'authorization': getToken() },
        body: JSON.stringify({'brand': brand, 
                                 'category': category,
                                'buy_price': parseInt(buy_price,10), 
                                'sale_price': parseInt(sale_price,10),
                                'presentation': presentation,
                                'stock': parseInt(stock,10),
                                'img_url': img_url
    })
    };
    console.log(requestOptions.body)
    return fetch(BASE_URL, requestOptions);
}
