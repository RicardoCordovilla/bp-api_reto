//? Dependencies
const express = require('express');
const db = require('./utils/database')
const cors = require('cors')
const productRoutes = require('./products/product.routes')

const { port } = require('./config');

const app = express()

app.use(express.json())

app.use(cors({ origin: '*' }))

db.authenticate()
    .then(() => {
        console.log('Database Authenticated')
    })
    .catch(err => {
        console.log(err)
    })

db.sync()
    .then(() => {
        console.log('Database Synced')
    })
    .catch(err => {
        console.log(err)
    })



app.get('/', (req, res) => {
    res.status(200).json({
        message: 'OK!',
        users: `localhost:${port}/bp`
    })
})

app.use('/bp/products', productRoutes)


app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})

