const User = require("../models/User")

const verifyAdmin = async (req, res, next) => {
    const user = await User.findOne({
        userName: req.body.user
    }).exec()

    if (user?.roles?.Admin) {
        next()
    } else {
        res.status(403).send('Forbidden - Access denied')
    }
    console.log(user);
}

module.exports = verifyAdmin;