import { admin, salesman, API, 
        login } from './config'

let category = { name: "cerveza" };

describe('Category api', () => {

    it('GET /api/category without token', async () => {
        const response = await API.get('/api/category').send();
        expect(response.statusCode).toBe(403)
    });

    it('GET /api/category with invalid token', async () => {
        let adminToken =  (await login(salesman)).body.token;

        const response = await API.get('/api/category')
            .set('authorization', adminToken + "a")
            .send();
        expect(response.statusCode).toBe(400)
    });

    it('GET /api/category - salesman', async () => {
        let token =  (await login(salesman)).body.token;

        const response = await API.get('/api/category')
            .set('authorization', token)
            .send();
        expect(response.statusCode).toBe(200) 
    });
    
    it('GET /api/category - admin', async () => {
        let token =  (await login(admin)).body.token;

        const response = await API.get('/api/category')
            .set('authorization', token)
            .send();
        expect(response.statusCode).toBe(200) 
    });

    it('POST /api/category - salesman', async () => {
        let token =  (await login(salesman)).body.token;

        const response = await API.post('/api/category')
            .set('authorization', token)
            .send(category);
        expect(response.statusCode).toBe(401); 
    });

    it('POST /api/category - admin', async () => {
        let token =  (await login(admin)).body.token;

        const response = await API.post('/api/category')
            .set('authorization', token)
            .send(category);
        expect(response.statusCode).toBe(201); 
        category.id = response.body._id;
    });
    
})