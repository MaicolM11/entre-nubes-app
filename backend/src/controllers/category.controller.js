import Category from '../models/Category';

import { categoryValidator } from '../utils/validation.util';

export const getAll = async (req, res) => {
    Category.find()
        .then(data => res.status(200).json(data))
        .catch(error => res.status(400).json({ message: error.message }));
}

export const create = async (req, res) => {
    const data = categoryValidator(req.body, res);

    if (!data) {
        res.status(422).json({ message: 'Invalid argument exception' })
        return;
    }

    const newCategory = new Category(data);

    newCategory.save()
        .then(doc => res.status(201).json(doc))
        .catch(error => res.status(400).json({ message: error.message }))
}

export const edit = async (req, res) => {
    const { id } = req.params;

    const data = categoryValidator(req.body, res);

    if (!data) {
        res.status(422).json({ message: 'Invalid argument exception' })
        return;
    }

    Category.findByIdAndUpdate(id, data, { new: true })
        .then(doc => {
            if (!doc) res.status(404).json({ message: 'Category not found' })
            else res.status(201).json(doc)
        })
        .catch(error => res.status(400).json({ message: error.message }))
}

export const deleteOne = async (req, res) => {
    const { id } = req.params;
    Category.findByIdAndDelete(id)
        .then(doc => res.sendStatus(200))
        .catch(error => res.status(400).json({ message: error.message }));
}