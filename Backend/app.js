const express = require ('express')
const aiRoutes = require('./src/routes/ai.routes')
const dotenv = require('dotenv')
dotenv.config()

const app =express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
}
)

app.use('/ai', aiRoutes)

module.exports = app