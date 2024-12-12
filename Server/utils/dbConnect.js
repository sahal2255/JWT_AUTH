const mongoose=require('mongoose')

const dbConnect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('mongodb database connected successfully')
    }catch(error){
        console.log('mongodb atlas connection error',error)
    }
}

module.exports=dbConnect