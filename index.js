
const express =require('express')

const cors =require('cors')

const logic =require('./services/logic')
  
const server =express()


server.use(cors({
    origin:'http://localhost:4200'
}))


server.use(express.json())

server.listen(2000,()=>{
    console.log('Registration app started at port number 2000');
})

// request resolving
// register from client
server.post("/register",(req,res)=>{
    console.log("inside register");
    
logic.register( req.body.firstname,
    req.body.lastname,
    req.body.email,
    req.body.mobile,
    req.body.dob,
    req.body.gender,
    req.body.address,
    req.body.course).then((result)=>
{
    res.status(result.statusCode).json(result)
})
})

server.get('/view',(req,res)=>{
    console.log('inside view');
    console.log(req.body);

    logic.view().then((result)=>{
        res.status(result.statusCode).json(result)

    })
})
