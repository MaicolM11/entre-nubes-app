import Product from "../models/Product";
import { productValidator } from "./validations.controller";

export const getAll = (req, res) => {
    Product.find().populate('category')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(400).json({ message: error.message }));
}

export const getById = (req, res) => {
    let { id } = req.params;
    Product.findById(id)
        .then(data => res.status(200).json(data))
        .catch(error => res.status(400).json({ message: error.message }));
}

export const create = (req, res) => {
    const data = productValidator(req.body);
    console.log(data)
    if (!data) {
        res.status(422).json({ message: 'Invalid argument exception' })
        return;
    }
    
    const newProduct = new Product(data);

    newProduct.save()
        .then(doc => res.status(201).json(doc))
        .catch(error => res.status(400).json({ message: error.message }))
}

export const edit = (req, res) => {
    const { id } = req.params;
    
    const data = productValidator(req.body);

    if (!data) {
        res.status(422).json({ message: 'Invalid argument exception' })
        return;
    }

    Product.findByIdAndUpdate(id, data, { new: true })
        .then(doc => {
            if (!doc) res.status(404).json({ message: 'Product not found' })
            else res.status(201).json(doc)
        })
        .catch(error => res.status(400).json({ message: error.message }))
}

export const deleteOne = (req, res) => {
    const { id } = req.params;
    Product.findByIdAndDelete(id)
        .then(doc => res.sendStatus(200))
        .catch(error => res.status(400).json({ message: error.message }));
}

export const updateStock = (req, res) => {
    updateStockToProduct(req.params.id, req.body.increment)
        .then(doc => {
            if (!doc) res.status(404).json({ message: 'Product not found' })
            else res.sendStatus(200)
        })
        .catch(error => res.status(400).json({ message: error.message }))
}

// increment | decrement . Promise
export const updateStockToProduct = (id, value) => {
    return Product.findByIdAndUpdate(id, { $inc: { 'stock': value } }, { new: true })
}