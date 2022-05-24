import Category from '../models/Category'

export const getAll = async (req, res) => {
    const result = await Category.find();   
    res.status(200).json(result); 
}


export const createCategory =async (req, res)=>{
    const {name} = req.body
    const newCategory = new Category({
        name
    });
    await newCategory.save();
    res.sendStatus(200)
}

export const editCategory =async (req, res)=>{
    const {id} = req.params
    await Category.findByIdAndUpdate({_id: id},{
        $set : {name : req.body.name} 
    })
    res.sendStatus(200)
}

export const deleteCategory =async (req, res)=>{
    const {name} = req.params.name
    await Category.deleteOne({ name: name });
    res.sendStatus(200)
}