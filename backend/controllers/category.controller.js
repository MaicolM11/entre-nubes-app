import Category from '../models/Category'

export const getAll = (req, res) => {
    const result = await Category.find();   
    res.status(200).json(result); 
}

export const createCategory = (req, res)=>{
    const {name} = req.body
    const newCategory = new Category({
        name
    });
    await newCategory.save();
    res.sendStatus(200)
}

export const editCategory = (req, res)=>{
    const {name} = req.params.name
    Category.findOneAndUpdate({name : name},{
        $set : req.body.name
    })
    res.sendStatus(200)
}

export const deleteCategory = (req, res)=>{
    const {name} = req.params.name
    await Category.deleteOne({ name: name });
    res.sendStatus(200)
}