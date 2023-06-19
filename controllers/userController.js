const createUser = async (req, res) => {
    console.log(req.body);
    try {
        res.json({
            message: "hello from createUser"
        })
    } catch (error) {

    }
}

module.exports = {
    createUser
}