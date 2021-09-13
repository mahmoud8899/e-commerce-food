const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')



const mongoose = require('mongoose');
require('dotenv').config();

const MONGOOSE_URL = process.env.MONGOOSE_URL



mongoose.connect(MONGOOSE_URL,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err, info) => {
        if (!err) console.log('mongoose......')
    })

app.use([
    express.json(),
    express.urlencoded({ extended: true }),
    morgan('dev'),

   



])

/*

 cors({
        origin: 'https://uppsala-mat.herokuapp.com/',
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true
    })
*/

app.use('/*', (req, res, next) => {
    res.setHeader('Last-Modified', (new Date()).toUTCString());
    next();
})





app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
const xpUser = require('./router/Auth')
const routerPost = require('./router/Post')
const uploading = require('./router/upload')
const OrderRoutering = require('./router/Order')
app.use('/api/',
    [
        xpUser,
        routerPost,
        OrderRoutering,
        uploading,


    ])






if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))

    app.get('*', (req, res) =>

        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}









app.listen(process.env.PORT || 8000, () => {
    console.log(`Server Runig.....`)
})














