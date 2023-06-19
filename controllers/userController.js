const bcrypt = require('bcrypt');
const User = require('../models/User');


const registerUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        
        const duplicate = await User.findOne({ userName: username });
        if (duplicate) {
            return res.json({
                message: `User with username ${username} already exists`
            })
        } 
        const hashed = await bcrypt.hashSync(password, 10);
        const result = await User.create({
            userName: username,
            password: hashed,
            roles: {
                Admin: false
            }

        })
        res.json({
            message: "hello from createUser",
            data: result
        })
    } catch (error) {

    }
}

module.exports = {
    registerUser
}