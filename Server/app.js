const express=require('express')
const dbConnect = require('./utils/dbConnect')
const userRoute=require('./routes/userRoute')
require('dotenv').config()
const cors=require('cors')

const app=express()
const PORT=process.env.PORT
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, 
}));
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api',userRoute)


app.listen(PORT,()=>{
    console.log('server running port ',PORT)
    dbConnect()
})