import Product from "../models/Product"

export const getAll = async (req, res) => {
    const result = await Product.find();   
    res.status(200).json(result); 
}

export const create = async (req, res) => {
    const { brand, category, buy_price, sale_price, presentation, stock } = req.body;
    
    const newProduct = new Product({
        brand, category, buy_price, sale_price, 
        presentation, stock
    });

    await newProduct.save();
    res.sendStatus(200)
}

export const edit = (req, res)=>{
    const id = req.params.id;
    res.sendStatus(201)
}

export const deleteOne = async (req, res)=>{
    const id = req.params.id;
    await Product.findByIdAndDelete(id).exec();
    res.sendStatus(200);
}

export const updateStock = async (req, res) => {
    await updateStockToProduct(req.params.id, req.body.increment);
    res.sendStatus(200);
}

// increment | decrement
export const updateStockToProduct = async (id, value) => {
   await Product.findByIdAndUpdate(id, { $inc: { 'stock': value } } )
                .exec();
}