import Product from "../models/Product"

export const getAll = (req, res) => {
    Product.find()
        .then(data => res.status(200).json(data))  
        .catch(error => res.status(400).json({message: error.message}));
}

export const create = (req, res) => {
    const data = { brand, category, buy_price, sale_price, presentation, stock, img_url } = req.body;
    const newProduct = new Product(data);

    newProduct.save()
        .then(doc => res.status(201).json(doc))
        .catch(error => res.status(400).json({message: error.message}))
}

export const edit = (req, res) => {
    const { id } = req.params;
    const data = { brand, category, buy_price, sale_price, presentation, stock, img_url } = req.body;  
    Product.findByIdAndUpdate(id, data)
        .then(doc => res.status(201).json(doc))
        .catch(error => res.status(400).json({message: error.message}))
}

export const deleteOne = (req, res)=>{
    const {id} = req.params;
    Product.findByIdAndDelete(id)
        .then(doc => res.sendStatus(200))
        .catch(error => res.status(400).json({message: error.message}));
}

export const updateStock = (req, res) => {
    updateStockToProduct(req.params.id, req.body.increment)
        .then(doc => res.status(200).json(doc))
        .catch(error => res.status(400).json({message: error.message}))
}

// increment | decrement . Promise
export const updateStockToProduct = (id, value) => {
   return Product.findByIdAndUpdate(id, { $inc: { 'stock': value } } )              
}