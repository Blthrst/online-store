const { Clothes } = require("../db/database.js");

async function addClothing(title, description, price, image) {
    try {
    const result = await Clothes.create({ title, description, price, image })
    if (result) return true
    else return false
    }
    catch(err) {
        console.log(err)
    }
}

module.exports = {addClothing}