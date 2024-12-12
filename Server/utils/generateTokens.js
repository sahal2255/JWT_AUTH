const jwt=require('jsonwebtoken')


const generateAccess=(user)=>{
    return jwt.sign(user,process.env.ACCESS_SECRET,{expiresIn:'10m'})
}
const generateRefresh=(user)=>{
    return jwt.sign(user,process.env.REFRESH_SECRET,{expiresIn:'20m'})
}


module.exports={
    generateAccess,
    generateRefresh
}