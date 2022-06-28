import Debtor from '../models/Debtor';

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

export const getById = (req, res) => {
    const { id } = req.params;
    Debtor.findById(id).populate({
            path: 'debts',
            select: { 'sales': 0 },
            // match: { status: "PENDIENTE" },
        })
        .then(data => res.status(200).json(data))
        .catch(error => res.status(400).json({ message: error.message }));
}

export const appendDueBill = (req, res) => {
    
}