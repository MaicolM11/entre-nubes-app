import { admin_token, salesman_token, 
        API, PRODUCT_URL, CATEGORY_URL } from '../config'
    
let product = {
    brand: "AGUILA",
    buy_price: 1800,
    sale_price: 2000,
    presentation: "350 ml",
    stock: 130
}

let product2 = {
    brand: "POKER",
    buy_price: 1800,
    sale_price: 2500,
    presentation: "350 ml",
    stock: 130
}

let category = {
    name : "CERVEZA"
}

describe.skip('Product api', () => {

    it('GET all without token', async () => {
        const response = await API.get(PRODUCT_URL).send();
        expect(response.statusCode).toBe(403)
    });

    it('GET all with invalid token', async () => {
        const response = await API.get(PRODUCT_URL)
            .set('authorization', admin_token + "a")
            .send();
        expect(response.statusCode).toBe(400)
    });

    it('GET all - salesman', async () => {
        const response = await API.get(PRODUCT_URL)
            .set('authorization', salesman_token)
            .send();
        expect(response.statusCode).toBe(200) 
    });

    it('GET all - admin', async () => {
        const response = await API.get(PRODUCT_URL)
            .set('authorization', admin_token)
            .send();
        expect(response.statusCode).toBe(200) 
    });

    it('Create product - salesman', async () => {
        const response = await API.post(PRODUCT_URL)
            .set('authorization', salesman_token)
            .send(product);
        expect(response.statusCode).toBe(401); 
    });


    it('Create product - admin', async () => {
        
        const res = await API.post(CATEGORY_URL)
                .set('authorization', admin_token)
                .send(category);

        product.category = res.body._id;

        const response = await API.post(PRODUCT_URL)
            .set('authorization', admin_token)
            .send(product);

        expect(response.statusCode).toBe(201); 

        product.id = response.body._id;
    });

    it('Edit product - salesman', async () => {
        const response = await API.put(PRODUCT_URL + product.id)
            .set('authorization', salesman_token)
            .send(product);
        expect(response.statusCode).toBe(401); 
    });

    it('Edit product - admin', async () => {
        product.sale_price = 3000;        
        const response = await API.put(PRODUCT_URL + product.id)
            .set('authorization', admin_token)
            .send(product);
        expect(response.statusCode).toBe(201); 
        expect(response.body.sale_price).toEqual(product.sale_price);
    });

    // sprint 3
    it('Add products to stock - admin', async () => {
        let increment = 100;
        const response = await API.put(PRODUCT_URL + product.id + '/stock')
            .set('authorization', admin_token)
            .send({increment: increment});
        expect(response.statusCode).toBe(200); 
        
        const res = await API.get(PRODUCT_URL + product.id)
            .set('authorization', admin_token)
            .send();
        expect(res.body.stock).toBe(product.stock + increment);    
    });

    it('filter product by name', async ()=> {
        product2.category = product.category;
        const response = await API.post(PRODUCT_URL)
            .set('authorization', admin_token)
            .send(product2);

        const filter = await API.get(PRODUCT_URL + 'search?brand=AG')
                                .set('authorization', admin_token)
                                .send();
        expect(filter.body.length).toBe(1);
    })

    it('filter product by category', async ()=> {
        product2.category = product.category;

        const filter = await API.get(PRODUCT_URL + 'search?category=' + product.category)
                            .set('authorization', admin_token)
                            .send();
        
        expect(filter.body.length).toBe(2);
    })

    // end
    it('Delete product - salesman', async () => {
        const response = await API.delete(PRODUCT_URL + product.id)
            .set('authorization', salesman_token);
        expect(response.statusCode).toBe(401); 
    });

    it('Delete product - admin', async () => {
        const response = await API.delete(PRODUCT_URL + product.id)
            .set('authorization', admin_token);
        expect(response.statusCode).toBe(200); 
    });

})