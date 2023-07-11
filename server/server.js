const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://monkeydminh49:dangminh49@cluster0.jvc7q0y.mongodb.net/TestDB?retryWrites=true&w=majority')

