// import db.js
const db=require('./db')


// register
const register=(firstname,
    lastname,
    email,
    mobile,
    dob,
    gender,
    address,
    course)=>{
// logic to resolve register 
console.log('inside register logic');

     return db.User.findOne({
        email
     }).then((response)=> {
        console.log(response);
        if(response){
            
            return{
                statusCode:401,
                message:"Account already exist..."
            }
        }

        else{
            
            const newUser=new db.User({
                firstname,
                lastname,
                email,
                mobile,
                dob,
                gender,
                address,
                course
            })

            
            newUser.save()

            
            return{
                statusCode:200,
                message:"Register successfully..."

            }

        }
    })
    

     
            
}

const view =()=>{
    console.log('inside api');
    return db.User.find().then((result)=>{

        if(result){
            //present in db
            return {
                statusCode:200,
                message:'data successful',
                data:result
            }
        }
        else{
            return {
                statusCode:404,
                message:'Invalid'
            }
        }

    })

}

module.exports={
    register,
    view
}
    




