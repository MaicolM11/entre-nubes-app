import User from '../models/User'

export const createUser = async (req, res) => {

    const { fullname, email, password, cc, address, phone } = req.body;

    const newUser = new User({
        fullname, email, 
        password: await User.encryptPass(password),
        cc, address, phone
    });

    return await newUser.save();
}


export const findUser = async (req, res) => {
    
    const foundUser = await User.findOne({email: req.body.email}) 
    
    if(!foundUser)  {
        res.status(400).json({message: 'User not found'})
        return false;
    }
    
    const matchPass = await User.comparePass(req.body.password, foundUser.password)
    
    if (!matchPass) {
        res.status(401).json({ message: 'Invalid Password'})
        return false;
    }
    
    return foundUser;    
}