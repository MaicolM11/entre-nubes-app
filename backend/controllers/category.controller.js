import Category from '../models/Category'

export const getAll = async (req, res) => {
    const result = await Category.find();   
    res.status(200).json(result); 
}

export const createCategory = async (req, res)=>{
    const {name} = req.body
    const newCategory = new Category({
        name
    });
    const categorySaved = await newCategory.save();
    res.status(201).json(categorySaved)
}

export const editCategory =async (req, res)=>{
    const {id} = req.params
    await Category.findByIdAndUpdate({_id: id},{
        $set : {name : req.body.name} 
    })
    res.sendStatus(200)
}

export const deleteCategory =async (req, res)=>{
    const {id} = req.params
    await Category.findByIdAndDelete({_id:id});
    res.sendStatus(200)
}