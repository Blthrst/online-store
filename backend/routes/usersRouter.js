const express = require('express')
const login = require('../functions/login.js')
const register = require('../functions/register.js')

const usersRouter = express.Router()

usersRouter.post('/signin', (req, res) => login(req, res))

usersRouter.post('/signup', (req, res) => register(req, res))

module.exports = usersRouter