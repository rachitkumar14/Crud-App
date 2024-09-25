
const userSchema = require('../Schema/userSchema.js')
           
           
               // Create Users
 
const createUser = async(req,res)=>{

   
    try{
        const {name , email }=req.body;
        if(!name || !email ){
            res.status(201).json({
                success:false,
                message:"something is not right"
            })
        }
        const user = await userSchema.create({
            name,
            email
        })
         res.status(201).json({
            success:true,
            message:`user created successfully`
         })

    }
    catch(err)
    {
        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}
    
            // Get users
   
const getUsers = async(req,res)=>{
    try{
        const users= await userSchema.find({});
        res.status(201).json({
            success:true,
            message:users
        })
    }
    catch(err)
    {
        res.status(400).json({
            success:false,
            message:err
        })
    }

}

    // Delete User


const deleteUser = async(req,res)=>{
    try{
        const userId = req.params.id;
        const deleteUser = await userSchema.findByIdAndDelete(userId);
        res.status(201).json({
            success:true,
            message:"user deleted successfully",deleteUser
        })
    }
    catch(err)
    {
        res.status(400).json({
            success:false,
            message:err
        })
    }
}


// Update User

const updateUser = async(req,res)=>
{
    try{
        const userId = req.params.id;
      const updateUser= await userSchema.findByIdAndUpdate(userId,req.body)
      res.status(201).json({
        success:true,
        message:"user updated successfully",updateUser
    })
    }
    catch(err)
    {
        res.status(400).json({
            success:false,
            message:err
        })
    }
}


module.exports={
    createUser,
    getUsers,
    deleteUser,
    updateUser
}
