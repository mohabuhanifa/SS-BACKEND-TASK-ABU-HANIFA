const bcrypt = require('bcrypt');
const User = require('../models/User');


const registerUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashed = bcrypt.hashSync(password, 10);
        const result = await User.create({
            userName: username,
            password: hashed,
            roles: {
                Admin: true
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