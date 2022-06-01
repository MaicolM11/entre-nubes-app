import { admin, salesman, API, 
        login } from './config'
        
let category = { name: "cerveza" };
const CATEGORY_URL = '/api/category/';

describe('Category api', () => {

    it('GET all without token', async () => {
        const response = await API.get(CATEGORY_URL).send();
        expect(response.statusCode).toBe(403)
    });

    it('GET all with invalid token', async () => {
        let adminToken =  (await login(salesman)).body.token;

        const response = await API.get(CATEGORY_URL)
            .set('authorization', adminToken + "a")
            .send();
        expect(response.statusCode).toBe(400)
    });

    it('GET all - salesman', async () => {
        let token =  (await login(salesman)).body.token;

        const response = await API.get(CATEGORY_URL)
            .set('authorization', token)
            .send();
        expect(response.statusCode).toBe(200) 
    });
    
    it('GET all - admin', async () => {
        let token =  (await login(admin)).body.token;

        const response = await API.get(CATEGORY_URL)
            .set('authorization', token)
            .send();
        expect(response.statusCode).toBe(200) 
    });

    it('Create category - salesman', async () => {
        let token =  (await login(salesman)).body.token;

        const response = await API.post(CATEGORY_URL)
            .set('authorization', token)
            .send(category);
        expect(response.statusCode).toBe(401); 
    });

    it('Create category - admin', async () => {
        let token =  (await login(admin)).body.token;

        const response = await API.post(CATEGORY_URL)
            .set('authorization', token)
            .send(category);
        expect(response.statusCode).toBe(201); 
        category.id = response.body._id;
    });

    it('Edit category - salesman', async () => {
        let token =  (await login(salesman)).body.token;
        const response = await API.put(CATEGORY_URL + category.id)
            .set('authorization', token)
            .send(category);
        expect(response.statusCode).toBe(401); 
    });
    
    it('Edit category - admin', async () => {
        category.name = "LICOR"
        let token =  (await login(admin)).body.token;
        
        const response = await API.put(CATEGORY_URL + category.id)
            .set('authorization', token)
            .send(category);
        expect(response.statusCode).toBe(201); 
        expect(response.body.name).toEqual(category.name);
    });

    it('Delete category - salesman', async () => {
        let token =  (await login(salesman)).body.token;

        const response = await API.delete(CATEGORY_URL + category.id)
            .set('authorization', token);
        expect(response.statusCode).toBe(401); 
    });

    it('Delete category - admin', async () => {
        let token =  (await login(admin)).body.token;

        const response = await API.delete(CATEGORY_URL + category.id)
            .set('authorization', token);
        expect(response.statusCode).toBe(200); 
    });
    
})