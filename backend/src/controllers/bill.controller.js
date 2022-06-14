import Bill from "../models/Bill";
import { findProductsAndUpdate } from "./sale.controller";

export const createBill = async (req, res) => {
    
    const data = req.body;
    data.salesman = req.userId;
    
    await findProductsAndUpdate(data.sales)
    await calculateTotalAndSubtotal(data)
    
    const newBill = new Bill(data);

    newBill.save()
        .then(doc => res.status(201).json(doc))
        .catch(error => res.status(400).json({ message: error.message }))
}

// get all my lastbills
export const getMyLastBills = (req, res) => {
    Bill.find({ salesman: req.userId })
        .then(data => res.status(200).json(data))
        .catch(error => res.status(400).json({ message: error.message }));
}

export const getAllLastBills = (req, res) => {
    Bill.find()
        .then(data => res.status(200).json(data))
        .catch(error => res.status(400).json({ message: error.message }));
}

export const appendProductsToBill = async (req, res) => {

    const { id } = req.params;
    const newSales = req.body;
    
    const foundBill = await Bill.findById(id);
    
    await findProductsAndUpdate(newSales);
    Array.prototype.push.apply(foundBill.sales, newSales)
    
    await calculateTotalAndSubtotal(foundBill)
    
    foundBill.save()
        .then(doc => res.status(201).json(doc))
        .catch(error => res.status(400).json({ message: error.message }))
}

const calculateTotalAndSubtotal = async (bill) => {
    let total = 0, subtotal = 0; 
    
    for await (let sale of bill.sales) {
        total += sale.quantity * sale.sale_price;
        subtotal += sale.quantity * sale.buy_price;
    }
    
    bill.total = total;
    bill.subtotal = subtotal;
}

export const emitLastBills = (socket = global.sockets) => {
    Bill.find()
        .then(data => socket.emit('sales', data))
    console.log("eneh");
    
}