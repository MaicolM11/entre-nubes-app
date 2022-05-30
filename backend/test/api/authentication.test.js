import { admin, login } from './config'

describe.skip('Login', () => {

    it('Correct credentials', async () => {
        const response = await login(admin);
        expect(response.statusCode).toEqual(200);
    })

    it('Unregistered user', async () => {
        const response = await login({ email: 'admin@gmail.co', password: admin.password });
        expect(response.statusCode).toEqual(404);
    })

    it('Incorrect password', async () => {
        const response = await login({ email: admin.email, password: '123' });
        expect(response.statusCode).toEqual(401);
    })

})