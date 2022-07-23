import { admin_token, salesman_token, API, BOLIRANA_URL, 
    } from '../config'


let bolirana = { name : "Bolirana cafe" };

describe('boliranas api', () => {

    it('create bolirana', async () => {
        const response = await API.post(BOLIRANA_URL)
                    .set('authorization', admin_token)
                    .send(bolirana);
        expect(response.statusCode).toBe(201);
        expect(response.body.state).toBe('LIBRE')
        bolirana.id = response.body._id;
    });

    it('get boliranas', async ()=> {
        const response = await API.get(BOLIRANA_URL)
                    .set('authorization', salesman_token)
                    .send();
        expect(response.statusCode).toBe(200)
        expect(response.body.length).toBe(1)
    })

    it('start bolirana', async () => {
        let currentTime = new Date().getTime();

        const response = await API.put(BOLIRANA_URL + bolirana.id + '/start')
                    .set('authorization', salesman_token)
                    .send({ time: 100000 });
        expect(response.body.init_time).toBeCloseTo(currentTime, -4);
        expect(response.body.state).toBe('OCUPADA');
        expect(response.body.time).toBe(100000);
    })

    it('reset bolirana', async ()=> {
        const response = await API.put(BOLIRANA_URL + bolirana.id + '/reset')
                    .set('authorization', salesman_token)
                    .send();
        expect(response.body.init_time).toBe(0);
        expect(response.body.time).toBe(0);
        expect(response.body.state).toBe('LIBRE');
    })

    it('delete bolirana', async ()=> {
        const response = await API.delete(BOLIRANA_URL + bolirana.id)
                    .set('authorization', salesman_token)
                    .send();
        expect(response.statusCode).toBe(200);
    })
})