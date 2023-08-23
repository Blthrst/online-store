const express = require('express')
const dotenv = require('dotenv')
const productsRouter = require('./routes/productsRouter.js')
const usersRouter = require('./routes/usersRouter.js')
dotenv.config()

const server = express()
const PORT = process.env.PORT ?? 3001


server.use(express.json())
server.use(express.urlencoded({extended: false}))
server.use('/api', productsRouter, usersRouter)


server.listen(PORT, () => console.log(`server started at port ${PORT}`))