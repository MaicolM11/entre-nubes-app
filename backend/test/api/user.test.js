import { admin, admin_token, API, 
    login, USER_URL } from '../config'

const user = {
    fullname: 'Pedrito Rojas',
    password: '123',
}

describe.skip('User api', () => {
    
    it('GET all', async () => {

        const response = await API.get(USER_URL)
            .set('authorization', admin_token)
            .send();
        expect(response.statusCode).toBe(200) 
        expect(response.body.length).toBe(2)
    });

    it('Create user without email - (required)', async () => {

        const response = await API.post(USER_URL)
            .set('authorization', admin_token)
            .send(user);
        expect(response.statusCode).toBe(400); 
    });

    it('Create user', async () => {
        user.email = 'test@gmail.com';
        const response = await API.post(USER_URL)
            .set('authorization', admin_token)
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
        const response = await API.post(USER_URL)
            .set('authorization', admin_token)
            .send(user);
        expect(response.statusCode).toBe(400); 
    });

    it('Get my info by token', async () => {

        const response = await API.get(USER_URL + 'my-info')
            .set('authorization', admin_token)
            .send();
        expect(response.statusCode).toBe(200);
        expect(response.body.fullname).toBe(admin.fullname)
        expect(response.body.email).toBe(admin.email)
        expect(response.body.rol).toBe(admin.rol)
    });

    it('Delete user', async () => {
        const response = await API.delete(USER_URL + user.id)
            .set('authorization', admin_token);

        expect(response.statusCode).toBe(200); 
    });

   
})