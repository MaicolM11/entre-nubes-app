import { admin_token, salesman_token, API, 
    BILL_URL, CATEGORY_URL, PRODUCT_URL, DEBTOR_URL } from '../config'

let product1 = {
    brand: "AGUILA",
    buy_price: 1800,
    sale_price: 2000,
    presentation: "350 ml",
    stock: 130
}

let product2 = {
    brand: "AGUILA",
    buy_price: 1800,
    sale_price: 2000,
    presentation: "350 ml",
    stock: 100
}

let debtor = {
    fullname: "Pedro Picapiedra",
    cc: "100392122",
    phone: "3225032190"
}

let category = {
    name : "CERVEZA"
}

let bill = {
    location : "Mesa 4",
    sales: []
}

let bill2 = {
    location : "Mesa 3",
    sales: []
}

describe('Bill api', () => {

    it('Create some products', async ()=> {
        const res = await API.post(CATEGORY_URL)
                .set('authorization', admin_token)
                .send(category);

        product1.category = product2.category = res.body._id;

        const res_prod1 = await API.post(PRODUCT_URL)
                .set('authorization', admin_token)
                .send(product1);
        
        product1.id = res_prod1.body._id;

        const res_prod2 = await API.post(PRODUCT_URL)
                .set('authorization', admin_token)
                .send(product2);

        product2.id = res_prod2.body._id;
    })

    it('Get all my bills', async () => {
        const response = await API.get(BILL_URL + 'my-sales/today')
            .set('authorization', salesman_token)
            .send();
       
        expect(response.statusCode).toBe(200) 
    })

    it('Create new bill', async () => {
        
        bill.sales= [
            { product: product1.id, quantity: 10},
            { product: product2.id, quantity: 20}
        ]
        
        const response = await API.post(BILL_URL)
            .set('authorization', salesman_token)
            .send(bill);
        
        bill.id = response.body._id;

        const total = product1.sale_price * 10 + product2.sale_price * 20;
        const subtotal = product1.buy_price * 10 + product2.buy_price * 20;
        
        expect(response.statusCode).toBe(201)
        expect(response.body.status).toBe('PENDIENTE')
        expect(response.body.total).toEqual(total)
        expect(response.body.subtotal).toEqual(subtotal)
    })

    it('Check if decrement products stock to created', async () => {
        const response = await API.get(PRODUCT_URL)
            .set('authorization', salesman_token)
            .send(bill);
        
        const prod1 = response.body.find(element => element._id == product1.id)
        const prod2 = response.body.find(element => element._id == product2.id)

        expect(prod1.stock).toBe(product1.stock - 10)
        expect(prod2.stock).toBe(product2.stock - 20)
    })

    it('Append sales to bill', async () => {
        const newSales = [{product: product1.id, quantity: 5}] 
        const response = await API.put(BILL_URL + 'append/' + bill.id)
            .set('authorization', salesman_token)
            .send(newSales);
        
        const total = product1.sale_price * 15 + product2.sale_price * 20;
        const subtotal = product1.buy_price * 15 + product2.buy_price * 20;
        
        expect(response.statusCode).toBe(201)
        expect(response.body.total).toEqual(total)
        expect(response.body.subtotal).toEqual(subtotal)
    })

    it('Check if decrement products stock to append', async () => {
        const response = await API.get(PRODUCT_URL)
            .set('authorization', salesman_token)
            .send(bill);
        
        const prod1 = response.body.find(element => element._id == product1.id)
        const prod2 = response.body.find(element => element._id == product2.id)

        expect(prod1.stock).toBe(product1.stock - 15)
        expect(prod2.stock).toBe(product2.stock - 20)
    })

    // sprint 3
    it('Pay bill', async () => {
        const response = await API.put(BILL_URL + bill.id +'/payment' )
                            .set('authorization', salesman_token)
                            .send({ payment_method: "EFECTIVO" });
        expect(response.statusCode).toBe(201)
        expect(response.body.status).toBe('PAGO')
    })

    it('Pay bill with non-existent payment method ', async () => {

        const response = await API.put(BILL_URL + bill.id +'/payment' )
                            .set('authorization', salesman_token)
                            .send({ payment_method: "BAD" });
        expect(response.statusCode).toBe(400)
    })

    //sprint 4

    it('assing bill to debtor', async () => {
        // create debtor
        const debtorRes = await API.post(DEBTOR_URL)
                    .set('authorization', admin_token)
                    .send(debtor);
            
        debtor.id = debtorRes.body._id;

        // create bill
        bill2.sales = bill.sales;
        const billRes = await API.post(BILL_URL)
                    .set('authorization', salesman_token)
                    .send(bill2);

        bill2.id = billRes.body._id;

        // assing bill to debtor
        const due = await API.put(BILL_URL + bill2.id + '/due')
                    .set('authorization', admin_token)
                    .send({ debtor_id: debtor.id});
        expect(due.statusCode).toBe(200)
    })

    it('pay due bill', async () => {
        let body = { payment_method: "EFECTIVO", debtor_id: debtor.id }
        const response = await API.put(BILL_URL + bill2.id +'/due/payment' )
                            .set('authorization', salesman_token)
                            .send(body);
        expect(response.statusCode).toBe(200)
    })

})