import { admin_token, salesman, API, 
    login, DEBTOR_URL } from '../config'


let debtor = {
    fullname: "Pedro Picapiedra",
    cc: "100392122",
    phone: "3225032190"
}

describe.skip('debtor api', () => {
    
    it('create debtor', async () => {
        const response = await API.post(DEBTOR_URL)
                    .set('authorization', admin_token)
                    .send(debtor);

        expect(response.statusCode).toBe(201)
        debtor.id = response.body._id;
    })

    it('create duplicate debtor', async () => {
        const debtor2 = { cc : debtor.cc }
        const response = await API.post(DEBTOR_URL)
                            .set('authorization', admin_token)
                            .send(debtor2);
        expect(response.statusCode).toBe(400)
    })
    
    it('get all debtors', async () => {
        const response = await API.get(DEBTOR_URL)
                            .set('authorization', admin_token)
                            .send();
        expect(response.statusCode).toBe(200)
        expect(response.body.length).toBe(1)
    })
    
})