import Debtor from '../models/Debtor';
import { BILL_STATES } from '../models/Enums';

export const create = (req, res) => {
    
    const newDebtor = new Debtor(req.body);

    newDebtor.save()
        .then(doc => res.status(201).json(doc))
        .catch(error => res.status(400).json({ message: error.message }))
}

export const getAll = (req, res) => {
    Debtor.find({}, {debts: 0})
        .then(data => res.status(200).json(data))
        .catch(error => res.status(400).json({ message: error.message }));
}

export const getDebtsOfDebtor = (req, res) => {
    const { id } = req.params;
    Debtor.findById(id, 'debts').populate({
            path: 'debts.item',
            select: { 'sales': 0 },
            match: { status: BILL_STATES.CREDIT },
        })
        .then(data => {
            let debts = data.debts.map(x => x.item).filter(x => x);
            res.status(200).json(debts)
        })
        .catch(error => res.status(400).json({ message: error.message }));
}
