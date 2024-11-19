const asyncHandler = require('express-async-handler')
const {PrismaClient} = require('prisma/prisma-client')
const prisma = new PrismaClient()
module.exports.addPost = asyncHandler(async (req,res,next)=>{
    let {title, user} = req.body
    try{
        const createdPost = await prisma.post.create({data:
            {
                title:title,
                authorId:user
            }
        })
        res.status(200).json({createdPost})
    }catch(e){
        console.log(e)
        res.status(500).json({e:"Error in Add Post"})
    }
})

module.exports.getPosts = asyncHandler( async (req,res)=>{
    const posts = await prisma.post.findMany()
    res.json(posts);
})