import Product from "../models/Product";
import { productFilter } from "../utils/filter.util";

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

    const newProduct = new Product(req.body);

    newProduct.save()
        .then(doc => res.status(201).json(doc))
        .catch(error => res.status(400).json({ message: error.message }))
}

export const edit = (req, res) => {
    const { id } = req.params;

    Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true  })
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

export const searchProduct = (req, res) => {
    const query = productFilter(req.query);
    Product.find(query) 
        .populate('category')
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({ message: err.message}));
}

export const updateStockToProduct = (id, value) => {
    return Product.findByIdAndUpdate(id, { $inc: { 'stock': value } }, 
            { new: true, runValidators: true  })
}

export const getAllByIds = async (ids) => {
    return await Product.find({'_id': { $in: ids }});
}