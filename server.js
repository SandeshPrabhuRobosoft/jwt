const dotenv=require('dotenv')
dotenv.config()

const express=require('express')
const app=express()

app.use(express.json())//////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.use(express.urlencoded({extended:false}));//////////////////////////////////////////////////////////////////////////////////////

const jwt=require('jsonwebtoken')

const posts=[
    {
        username:'abc',
        title:"post 1"
    },
    {
        username:'bcd',
        title:"post 2"
    }

]

app.get('/posts',(req,res)=>{
    res.json(posts)
}) 

app.post('/login',(req,res)=>{
    //Authenticate login

    const username=req.body.username
    // console.log(req.body)
    // res.send(req.body)
    const user={name:username}

    const accessToken=jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken: accessToken})
})

app.listen(8080)