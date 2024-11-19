const asyncHandler = require('express-async-handler')
const {PrismaClient} = require('prisma/prisma-client')
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