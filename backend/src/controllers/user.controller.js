import User from '../models/User'
import { userFilter } from '../utils/filter.util';

export const createUser = async (req, res) => {

    const data = req.body;

    data.password = await User.encryptPass(data.password);
    
    const newUser = new User(data);

    newUser.save()
        .then(doc => res.status(201).json(doc))
        .catch(error => res.status(400).json({ message: error.message }))
}

export const deleteOne = (req, res) => {
    const { id } = req.params;
    User.findByIdAndDelete(id)
        .then(doc => res.sendStatus(200))
        .catch(error => res.status(400).json({ message: error.message }));
}

export const getAll = (req, res) => {
    User.find({}, {password: 0})
        .then(data => res.status(200).json(data))
        .catch(error => res.status(400).json({ message: error.message }));
}

export const searchUser = (req, res) => {
    const query = userFilter(req.query);
    User.find(query, { password: 0 })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({ message: err.message}));
}

export const getInfo = (req, res) => {
    const { userId } = req;
    User.findById(userId, { password: 0 } )
        .then(doc => {
            if (doc) res.status(200).json(doc)
            else res.sendStatus(404);
        })
        .catch(err => res.status(400).json({ message: err.message }))
}

export const findUserAndComparePassword = async (req, res) => {

    const foundUser = await User.findOne({ email: req.body.email })

    if (!foundUser) {
        res.status(404).json({ message: 'User not found' })
        return false;
    }

    const matchPass = await User.comparePass(req.body.password, foundUser.password)

    if (!matchPass) {
        res.status(401).json({ message: 'Invalid Password' })
        return false;
    }

    return foundUser;
}