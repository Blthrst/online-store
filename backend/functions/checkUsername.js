const { User } = require("../db/User.js");

async function checkUsername(username) {
    const user = await User.findOne({ where: { username } })
    if (user) return false
    else return true
}

module.exports = {checkUsername}