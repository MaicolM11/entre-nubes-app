import { admin_token, salesman_token, API, 
        login, CATEGORY_URL, admin } from '../config'
        
let category = { name: "cerveza" };

describe.skip('Category api', () => {

    it('GET all without token', async () => {
        const response = await API.get(CATEGORY_URL).send();
        expect(response.statusCode).toBe(403)
    });

    it('GET all with invalid token', async () => {
        const response = await API.get(CATEGORY_URL)
            .set('authorization', admin_token + "a")
            .send();
        expect(response.statusCode).toBe(400)
    });

    it('GET all - salesman', async () => {
        const response = await API.get(CATEGORY_URL)
            .set('authorization', salesman_token)
            .send();
        expect(response.statusCode).toBe(200) 
    });
    
    it('GET all - admin', async () => {
        const response = await API.get(CATEGORY_URL)
            .set('authorization', admin_token)
            .send();
        expect(response.statusCode).toBe(200) 
    });

    it('Create category - salesman', async () => {
        const response = await API.post(CATEGORY_URL)
            .set('authorization', salesman_token)
            .send(category);
        expect(response.statusCode).toBe(401); 
    });

    it('Create category - admin', async () => {
        const response = await API.post(CATEGORY_URL)
            .set('authorization', admin_token)
            .send(category);
        expect(response.statusCode).toBe(201); 
        category.id = response.body._id;
    });

    it('Edit category - salesman', async () => {
        const response = await API.put(CATEGORY_URL + category.id)
            .set('authorization', salesman_token)
            .send(category);
        expect(response.statusCode).toBe(401); 
    });
    
    it('Edit category - admin', async () => {
        category.name = "LICOR"        
        const response = await API.put(CATEGORY_URL + category.id)
            .set('authorization', admin_token)
            .send(category);
        expect(response.statusCode).toBe(201); 
        expect(response.body.name).toEqual(category.name);
    });

    it('Delete category - salesman', async () => {
        const response = await API.delete(CATEGORY_URL + category.id)
            .set('authorization', salesman_token);
        expect(response.statusCode).toBe(401); 
    });

    it('Delete category - admin', async () => {
        const response = await API.delete(CATEGORY_URL + category.id)
            .set('authorization', admin_token);
        expect(response.statusCode).toBe(200); 
    });
    
})