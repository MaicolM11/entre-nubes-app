import Bolirana from "../models/Bolirana";
import { BOLIRANAS_STATES } from "../models/Enums";

export const create = (req, res) => {
    const newBolirana = new Bolirana(req.body);

    newBolirana.save()
        .then(doc => res.status(201).json(doc))
        .catch(error => res.status(400).json({ message: error.message }))
}

export const startBolirana = (req, res) => {
    const { id } = req.params;
    
    const data = {
        init_time: new Date().getTime(),
        time: req.body.time,
        state: BOLIRANAS_STATES.BUSY
    }
    
    Bolirana.findByIdAndUpdate(id, data, { new: true, runValidators: true})
        .then(doc => {
            if (!doc) res.status(404).json({ message: 'Bolirana not found' })
            else res.status(201).json(doc)
        })
        .catch(error => res.status(400).json({ message: error.message }))
}

export const resetBolirana = (req, res) => {
    const { id } = req.params;
    
    const data = {
        init_time: 0,
        time: 0,
        state: BOLIRANAS_STATES.AVAILABLE
    }
    
    Bolirana.findByIdAndUpdate(id, data, { new: true, runValidators: true})
        .then(doc => {
            if (!doc) res.status(404).json({ message: 'Bolirana not found' })
            else res.status(201).json(doc)
        })
        .catch(error => res.status(400).json({ message: error.message }))
}