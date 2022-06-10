import { admin, salesman, API, 
    login } from '../config'

const USER_URL = '/api/user/';

const user = {
    fullname: 'Pedrito Rojas',
    password: '123',
}

describe('User api', () => {
    
    it('GET all', async () => {
        let token =  (await login(admin)).body.token;

        const response = await API.get(USER_URL)
            .set('authorization', token)
            .send();
        expect(response.statusCode).toBe(200) 
        expect(response.body.length).toBe(2)
    });

    it('Create user without email - (required)', async () => {
        let token =  (await login(admin)).body.token;

        const response = await API.post(USER_URL)
            .set('authorization', token)
            .send(user);
        expect(response.statusCode).toBe(400); 
    });

    it('Create user', async () => {
        let token =  (await login(admin)).body.token;
        user.email = 'test@gmail.com';
        const response = await API.post(USER_URL)
            .set('authorization', token)
            .send(user);
        expect(response.statusCode).toBe(201); 
        expect(response.body.rol).toBe("SALESMAN")
        user.id = response.body._id;
    });

    it('Success login', async () => {
        let response =  (await login(user));
        expect(response.statusCode).toBe(200)
    });

    it('Create user with exist email', async () => {
        let token =  (await login(admin)).body.token;
        const response = await API.post(USER_URL)
            .set('authorization', token)
            .send(user);
        expect(response.statusCode).toBe(400); 
    });

    it('Get my info by token', async () => {
        let token =  (await login(admin)).body.token;

        const response = await API.get(USER_URL + 'my-info')
            .set('authorization', token)
            .send();
        expect(response.statusCode).toBe(200);
        expect(response.body.fullname).toBe(admin.fullname)
        expect(response.body.email).toBe(admin.email)
        expect(response.body.rol).toBe(admin.rol)
    });

    it('Delete user', async () => {
        let token =  (await login(admin)).body.token;

        const response = await API.delete(USER_URL + user.id)
            .set('authorization', token);
        expect(response.statusCode).toBe(200); 
    });

   
})