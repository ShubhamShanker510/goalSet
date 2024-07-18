const express=require('express');
const router = require('./routes/goalroutes');
const { errorHandler } = require('./middleware/errorMiddleware');
const app=express();
const dotenv=require('dotenv').config();
const port=process.env.PORT || 5001



app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals',router);
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server running on ${port}...`);
})