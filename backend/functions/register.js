const { User } = require("../db/User.js");
const { hash } = require("bcryptjs");
const { checkUsername } = require("./checkUsername.js");

async function register(req, res) {
    try {
        if (checkUsername(req.body.username)) {
            const hashedPassword = await hash(req.body.password, 2)
            const user = await User.create({ username: req.body.username, email: req.body.email, password: hashedPassword })
            if (user) {
                res.status(200)
            }
            else {
                res.status(500).json({ message: "User creation error" })
            }
        }
        else {
            res.status(403).json({ message: "Create another username" })
        }
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = register