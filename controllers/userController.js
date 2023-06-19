const bcrypt = require('bcrypt');
const User = require('../models/User');
require('dotenv').config();
const jwt = require('jsonwebtoken');

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
        });

    } catch (error) {
        res.send(error)
    }
}

const handleLogin = async (req, res) => {
    try {
        const user = await User.findOne({ userName: req.body.username });

        if (!user) {
            return res.json({
                message: "User not found"
            });
        }

        const match = await bcrypt.compare(req.body.password, user.password);

        if (!match) {
            return res.json({
                message: "Wrong password"
            });
        };

        if (user && match) {
            const { password, ...otherDetails } = user._doc;

            const token = jwt.sign({
                userName: user.userName,
                isAdmin: user.roles.Admin
            }, process.env.JWT_SECRET,)

            return res.cookie("access_token", token, {
                httpOnly: true,
            })
                .status(200).json({
                    message: "Login successful",
                    data: { ...otherDetails }
                });

        }
    } catch (error) {
        res.send(error)
    }

}




module.exports = {
    registerUser, handleLogin
}