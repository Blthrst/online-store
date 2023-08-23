const { User } = require('../db/User.js')
const { compareSync } = require('bcryptjs')
const { sign } = require('jsonwebtoken')

async function login(req, res) {
    const candidate = await User.findOne({ where: { email: req.body.email } })
    if (candidate) {
        const passwordResult = compareSync(req.body.password, candidate.password)
        if (passwordResult) {
            const token = sign({
                email: candidate.email,
                userId: candidate.id
            }, 'anyKey', { expiresIn: 60 * 60 })

            res.status(200).json({ token: token })
        } else {
            res.status(401).json({ message: "Password is wrong" })
        }
    } else {
        res.status(404).json({ message: "User not found" })
    }
}

module.exports = login