require("dotenv").config()
const asyncHandler = require('express-async-handler')
const {PrismaClient} = require('prisma/prisma-client')
const jwt = require('jsonwebtoken')
const prisma = new PrismaClient()
module.exports.createAccount = asyncHandler( async (req,res)=>{
    try{
        let {username, password, email, fName, lName} =  req.body
    let name = fName + " " + lName
    console.log(username, typeof(username))
    const user = await prisma.user.create({data:{
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
        name:name,
    }})
    
    res.json(user)
    }catch(e){
        console.log("Error creating profile", e)
        res.status(500).json({e:"Error in creating account"})
    }
})

module.exports.login = asyncHandler( async (req,res)=>{
    // get the username and password from login request
    let {username,password} = req.body;
    // verify username and password
    let user = await  prisma.user.findUnique({
        select:{
            username:true,
            id:true
        },
        where:{
            username : username
        }
    })
    if(!user){
        res.json({
            error:"Username or Password incorrect"
        })
    }
    if(!user.password == password){
        res.json({
            error:"Username or Password incorrect"
        })
    }
    //TODO
    let token = jwt.sign(user, process.env.JWT_SECRETKEY, { expiresIn: '10d' })
    res.json({user, token})
    
})
module.exports.getUsers = asyncHandler( async (req,res)=>{
    try{
       const users = await prisma.user.findMany({
        select:{id:true,username:true}
       });
       res.json(users);
    }catch(e){
        console.log(e, "Failed to get all users")
    }
})
