const User=require('../models/userModel')
const jwt=require('jsonwebtoken')
const { generateAccess, generateRefresh } = require('../utils/generateTokens')


const userLogin=async(req,res)=>{
    console.log('hitting the user login route')
    
    try {
        const  {email,password}=req.body
        const existingUser=await User.findOne({email})
        if(existingUser){
            console.log('user already exist',existingUser)
            const existuserpayload={id:existingUser._id,email:existingUser.email}
            const accesstoken=generateAccess(existuserpayload)
            const refreshtoken=generateRefresh(existuserpayload)
            
            res.cookie('accessToken', accesstoken, {
                httpOnly: true,
                sameSite: 'strict',
                secure: false,
            });
            res.cookie('refreshToken',refreshtoken,{
                httpOnly:true,
                sameSite:'strict',
                secure:false
            })
            console.log('Cookie set:', accesstoken); 
            res.status(200).json({ message: 'Login Success' });
            
        }else{

            console.log('user is not founded and moving to the user creation')
            const newUser=new User({
                email,
                password
            }) 
            console.log('user is created successfully')
            await newUser.save()
            const userpayload={id:newUser._id,email:newUser.email}
            const accesstoken=generateAccess(userpayload)
            const refreshtoken=generateRefresh(userpayload)
           
            res.cookie('accessToken', accesstoken, {
                httpOnly: true,
                sameSite: 'strict',
                secure: false,
            });
            res.cookie('refreshToken',refreshtoken,{
                httpOnly:true,
                sameSite:'strict',
                secure:false
            })
            res.status(201).json({message:'New User Created Successfully',newUser})
        }
    } catch (error) {
        console.log('error in the login controller',error)
    }
}
const userData=async(req,res)=>{
    const userId=req.user.id
    console.log('userId',userId)
}

const checkAuth=async(req,res)=>{
    try {
        res.status(200).json(req.user)
    } catch (error) {
        console.log('error in the user check auth function',error)
    }
}
module.exports={
    userLogin,
    userData,
    checkAuth
}