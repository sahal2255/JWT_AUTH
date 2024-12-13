const express =require('express')
const router=express.Router()
const userController=require('../controllers/userController')
const tokenAuth=require('../middleware/tokenAuth')

router.post('/userlogin',userController.userLogin)
router.get('/checkauth',tokenAuth,userController.checkAuth)
router.get('/userdata',tokenAuth,userController.userData)

module.exports =router