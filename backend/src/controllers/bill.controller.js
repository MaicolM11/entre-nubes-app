import Bill from "../models/Bill";
import Debtor from "../models/Debtor";
import { BILL_STATES, PAYMENT_METHODS } from "../models/Enums";

import { findProductsAndUpdate } from "./sale.controller";

const updateOptions = { new: true, runValidators: true };

export const createBill = async (req, res) => {
  try {
    const data = req.body;
    data.salesman = req.user._id;

    await findProductsAndUpdate(data.sales);
    await calculateTotalAndSubtotal(data);

    const newBill = new Bill(data);

    newBill
      .save()
      .then((doc) => res.status(201).json(doc))
      .catch((error) => res.status(400).json({ message: error.message }));
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getMyLastBills = (req, res) => {
  Bill.find({ salesman: req.user._id }, {sales: 0})
    .sort({status: -1, location: 1})
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(400).json({ message: error.message }));
};

export const getAllLastBills = (req, res) => {
  Bill.find()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(400).json({ message: error.message }));
};

export const getSalesOfBill = (req, res) => {
    const { id } = req.params;
    Bill.findById(id, 'sales')
        .populate('sales.product', 'brand')
        .then(data => res.status(200).json(data.sales))
        .catch(err => res.status(400).json({ message: err.message }))
}

export const appendProductsToBill = async (req, res) => {
  const { id } = req.params;
  const newSales = req.body;

  const foundBill = await Bill.findById(id);

  await findProductsAndUpdate(newSales);
  Array.prototype.push.apply(foundBill.sales, newSales);

  await calculateTotalAndSubtotal(foundBill);

  foundBill
    .save()
    .then((doc) => res.status(201).json(doc))
    .catch((error) => res.status(400).json({ message: error.message }));
};

const calculateTotalAndSubtotal = async (bill) => {
  let total = 0,
    subtotal = 0;

  for await (let sale of bill.sales) {
    total += sale.quantity * sale.sale_price;
    subtotal += sale.quantity * sale.buy_price;
  }

  bill.total = total;
  bill.subtotal = subtotal;
};

export const payBill = (req, res) => {
  const { id } = req.params;
  
  Bill.findByIdAndUpdate(id, {
      status: BILL_STATES.PAID,
      payment_method: req.body.payment_method.toUpperCase()
  }, updateOptions)
      .then(doc => {
          if (!doc) res.status(404).json({ message: 'Bill not found' })
          else res.status(201).json(doc)
      })
      .catch(error => res.status(400).json({ message: error.message }))
}

export const assingBillToDebtor = (req, res) => {
    
  const { id : bill_id } = req.params;
  const { debtor_id } = req.body;
  Bill.findByIdAndUpdate(bill_id, { status: BILL_STATES.CREDIT}, updateOptions)
      .then(() => Debtor.findByIdAndUpdate(debtor_id, 
          { $push: { debts: { item: bill_id } }}, updateOptions))
      .then(() => res.sendStatus(200))
      .catch(err => res.status(400).json({ message: err.message }))        
}

export const payDueBill = (req, res) => {
  const { id: bill_id } = req.params;
  const { debtor_id } = req.body;

  Debtor.findById(debtor_id).populate('debts.item')
      .then(debtor => debtor.debts.find(x => x.item._id == bill_id))
      .then(bill => {
          let newBill = bill.item;
          newBill.status = BILL_STATES.PAID
          payment_method = req.body.payment_method.toUpperCase()
          return newBill.save()
      })
      .then(() => res.sendStatus(200))
      .catch(error => res.status(400).json({ message: error.message }));
}

export const deskClosing = (req, res) => {
  res.sendStatus(200)
  // pasar de last_bills -> bills, 
  // cambiar la coleccion en deudores.
  // eliminar last_bills
}

export const getPaymentMethods = (req, res) => {
  res.status(200).json(Object.values(PAYMENT_METHODS))
}

export const emitLastBills = (socket = global.sockets) => {
  Bill.find({}, { sales: 0 })
    .populate('salesman', 'fullname')
    .sort('-updatedAt')
    .then(data => socket.emit("sales", data));
};
