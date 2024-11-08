const express = require('express')
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoConnect = require('../server/db/connect');
mongoConnect();
const cors  = require('cors')
const path = require('path')

const router = require('./Router/router')
const authRouter = require('../server/Router/auth-Router')

app.use(express.json({limit : "500mb"}));
app.use(express.urlencoded({extended : true}));
app.use(cors())
app.use(express.static(path.join(__dirname, 'client')));
app.use(router)
app.use(authRouter)
app.use('/uploads',express.static('./uploads'))



app.listen(process.env.PORT,()=>{
    console.log(`server is running at http://localhost:${process.env.PORT}`)
})