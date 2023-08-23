const express = require('express')
const { Clothes } = require('../db/database.js')
const { addClothing } = require('../functions/addClothing.js')

const productsRouter = express.Router()

productsRouter.get('/clothing', async (req, res) => {
  const clothes = await Clothes.findAll({ raw: true })
  res.json(clothes)
})

productsRouter.get('/clothing/:id', async (req, res) => {
  try {
    const targetProduct = await Clothes.findByPk(req.params.id)
    if (targetProduct) {
      res.json(targetProduct)
    }
    else {
      res.end()
    }
  }
  catch (err) {
    console.log(err)
  }
})

productsRouter.post('/clothing/editor', async (req, res) => {
  try {
    const isAdded = await addClothing(req.body.title, req.body.description, req.body.price, req.body.image)
    if (isAdded) res.status(200)
    else res.status(500)
  }
  catch (err) {
    console.log(err)
  }
});

module.exports = productsRouter