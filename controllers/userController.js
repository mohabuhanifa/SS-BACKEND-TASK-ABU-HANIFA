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
        const hashed = bcrypt.hash(password, 10);
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

const handleLogin = async (req, res) => {
    const { username, password } = req.body;
    try {
        res.send({ username, password })
    } catch (error) {
        res.send(error)
    }

}




module.exports = {
    registerUser, handleLogin
}