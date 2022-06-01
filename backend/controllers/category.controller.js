import Category from '../models/Category'

export const getAll = async (req, res) => {
    Category.find()
        .then(data => res.status(200).json(data))
        .catch(error => res.status(400).json({ message: error.message }));
}

export const create = async (req, res)=> {
    const newCategory = new Category(req.body);

    newCategory.save()
        .then(doc => res.status(201).json(doc))
        .catch(error => res.status(400).json({ message: error.message }))
}

export const edit = async (req, res)=>{
    const { id } = req.params;
    Category.findByIdAndUpdate(id, req.body, {new: true} )
        .then(doc => {
            if (!doc) res.status(404).json({ message: 'Category not found' })
            else res.status(201).json(doc)
        })
        .catch(error => res.status(400).json({ message: error.message }))
}

export const deleteOne =async (req, res)=>{
    const { id } = req.params;
    Category.findByIdAndDelete(id)
        .then(doc => res.sendStatus(200))
        .catch(error => res.status(400).json({ message: error.message }));
}