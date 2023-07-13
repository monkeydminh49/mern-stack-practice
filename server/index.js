const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
require('dotenv').config()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DATABASE_URI)

app.get('/', (req, res) => {
    res.json({ status: 'ok', message: 'Welcome to MinhDunk API' })
})

app.get('/api/users', async (req, res) => {
    const users = await User.find()
    res.json({ status: 'ok', users: users })
})

app.get('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json({ status: 'ok', user: user })
    } catch (e) {
        res.json({ status: 'error', message: 'User does not exist' })
    }
})

app.post('/api/register', async (req, res) => {

    console.log(req.body)

    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json({ status: 'ok' })
    } catch (err) {
        res.json({ status: 'error', error: 'Duplicate email' })
    }

})

app.post('/api/login', async (req, res) => {

    console.log(req.body)
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })

    if (user) {

        const accessToken = jwt.sign({ email: user.email, name: user.name }, process.env.ACCESS_TOKEN_SECRET)

        res.json({ status: 'ok', user: accessToken })
    } else {
        res.json({ status: 'error', user: false })
    }

})




app.listen(1337, () => {
    console.log('Example app listening on port 1337!')
})