// import mongoose
const mongoose =require('mongoose')

mongoose.connect('mongodb://localhost:27017/testServer')

const User =mongoose.model('User',{
    
    firstname:String,
    lastname:String,
    email:String,
    mobile:String,
    dob:String,
    gender:String,
    address:String,
    course:String,
    



    
})

module.exports={
    User
}