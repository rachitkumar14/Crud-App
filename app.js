
const express=require('express');
const app=express();
require('dotenv').config();
const userRoutes=require('./Routers/userRouter')
const cors=require('cors');
app.use(cors());
app.use(express.json());

const connectToDb=require('./config/db')

connectToDb();
app.use('/',userRoutes)

module.exports=app;