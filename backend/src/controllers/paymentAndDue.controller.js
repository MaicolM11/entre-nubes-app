import Bill from "../models/Bill";
import { BillRecord } from "../models/Bill";
import Debtor from "../models/Debtor";

import { BILL_STATES } from "../models/Enums";

// paga una venta
export const payBill = (req, res, next, Collection = Bill) => {
    const { id } = req.params;
    
    Collection.findByIdAndUpdate(id, {
        status: BILL_STATES.PAID,
        payment_method: req.body.payment_method.toUpperCase()
    }, { new: true })
        .then(doc => {
            if (!doc) res.status(404).json({ message: 'Bill not found' })
            else res.status(201).json(doc)
        })
        .catch(error => res.status(400).json({ message: error.message }))
}

// agrega id al array, clona la venta
export const assingBillToDebtor = (req, res) => {
    
    const { id : bill_id } = req.params;
    const { debtor_id } = req.body;
    
    Bill.findByIdAndUpdate(bill_id, { status: BILL_STATES.CREDIT}, { new: true })
        .then(bill => {
            let copy = new BillRecord(bill);
            copy.isNew = true;
            return copy.save()
        })
        .then(() => Debtor.findById(debtor_id))
        .then(debtor => {
            debtor.debts.push(bill_id)
            return debtor.save();
        })
        .then(() => res.sendStatus(200))
        .catch(err => res.status(400).json({message: err.message}))        
}

export const payDueBill = (req, res) => {
    payBill(req, res, null,BillRecord);
}