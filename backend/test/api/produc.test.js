import { admin, salesman, API, 
    login } from '../config'
    
let product = {
    brand: "AGUILA",
    buy_price: 1800,
    sale_price: 2000,
    presentation: "350 ml",
    stock: 130
}

let category = {
    name : "CERVEZA"
}

const PRODUCT_URL = '/api/product/';
const CATEGORY_URL = '/api/category/';


describe.skip('Product api', () => {

    it('GET all without token', async () => {
        const response = await API.get(PRODUCT_URL).send();
        expect(response.statusCode).toBe(403)
    });

    it('GET all with invalid token', async () => {
        let adminToken =  (await login(salesman)).body.token;

        const response = await API.get(PRODUCT_URL)
            .set('authorization', adminToken + "a")
            .send();
        expect(response.statusCode).toBe(400)
    });

    it('GET all - salesman', async () => {
        let token =  (await login(salesman)).body.token;

        const response = await API.get(PRODUCT_URL)
            .set('authorization', token)
            .send();
        expect(response.statusCode).toBe(200) 
    });

    it('GET all - admin', async () => {
        let token =  (await login(admin)).body.token;

        const response = await API.get(PRODUCT_URL)
            .set('authorization', token)
            .send();
        expect(response.statusCode).toBe(200) 
    });

    it('Create product - salesman', async () => {
        let token =  (await login(salesman)).body.token;

        const response = await API.post(PRODUCT_URL)
            .set('authorization', token)
            .send(product);
        expect(response.statusCode).toBe(401); 
    });


    it('Create product - admin', async () => {
        let token =  (await login(admin)).body.token;
        
        const res = await API.post(CATEGORY_URL)
                .set('authorization', token)
                .send(category);

        product.category = res.body._id;

        const response = await API.post(PRODUCT_URL)
            .set('authorization', token)
            .send(product);

        expect(response.statusCode).toBe(201); 

        product.id = response.body._id;
    });

    it('Edit product - salesman', async () => {
        let token =  (await login(salesman)).body.token;
        const response = await API.put(PRODUCT_URL + product.id)
            .set('authorization', token)
            .send(product);
        expect(response.statusCode).toBe(401); 
    });

    it('Edit product - admin', async () => {
        product.sale_price = 3000;
        let token =  (await login(admin)).body.token;
        
        const response = await API.put(PRODUCT_URL + product.id)
            .set('authorization', token)
            .send(product);
        expect(response.statusCode).toBe(201); 
        expect(response.body.sale_price).toEqual(product.sale_price);
    });

    it('Add products to stock - admin', async () => {
        let increment = 100;
        let token =  (await login(admin)).body.token;
        const response = await API.put(PRODUCT_URL + product.id + '/stock')
            .set('authorization', token)
            .send({increment: increment});
        expect(response.statusCode).toBe(200); 
        
        const res = await API.get(PRODUCT_URL + product.id)
            .set('authorization', token)
            .send();
        expect(res.body.stock).toBe(product.stock + increment);    
    });


    it('Delete product - salesman', async () => {
        let token =  (await login(salesman)).body.token;

        const response = await API.delete(PRODUCT_URL + product.id)
            .set('authorization', token);
        expect(response.statusCode).toBe(401); 
    });

    it('Delete product - admin', async () => {
        let token =  (await login(admin)).body.token;

        const response = await API.delete(PRODUCT_URL + product.id)
            .set('authorization', token);
        expect(response.statusCode).toBe(200); 
    });

})